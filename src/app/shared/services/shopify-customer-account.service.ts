import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShopifyCustomerAccountService {

  private readonly STATE_KEY = 'shopify_oauth_state';
  private readonly VERIFIER_KEY = 'shopify_oauth_verifier';

  constructor(private http: HttpClient) {}

  // Generate a cryptographically secure random string for state or code_verifier
  private generateRandomString(length: number): string {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~';
    const cryptoObj = window.crypto;
    if (!cryptoObj || !cryptoObj.getRandomValues) {
      throw new Error('Secure browser cryptography is not available. OAuth security values cannot be generated.');
    }
    const array = new Uint8Array(length);
    cryptoObj.getRandomValues(array);
    let text = '';
    for (let i = 0; i < length; i++) {
      text += possible.charAt(array[i] % possible.length);
    }
    return text;
  }

  // Generate PKCE code_verifier (43 to 128 characters)
  public generateCodeVerifier(): string {
    return this.generateRandomString(64);
  }

  // Generate SHA-256 code_challenge from code_verifier
  public async generateCodeChallenge(verifier: string): Promise<string> {
    try {
      const encoder = new TextEncoder();
      const data = encoder.encode(verifier);
      const digest = await window.crypto.subtle.digest('SHA-256', data);
      return this.base64UrlEncode(digest);
    } catch (error) {
      throw new Error('Failed to generate PKCE code challenge: ' + (error instanceof Error ? error.message : 'Unknown error'));
    }
  }

  // Base64-URL encode an ArrayBuffer or Uint8Array
  private base64UrlEncode(buffer: ArrayBuffer): string {
    const bytes = new Uint8Array(buffer);
    let binary = '';
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary)
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');
  }

  // Generate OAuth state parameter
  public generateState(): string {
    return this.generateRandomString(32);
  }

  // Store temporary OAuth state and verifier securely in sessionStorage
  public storeSessionData(state: string, verifier: string): void {
    sessionStorage.setItem(this.STATE_KEY, state);
    sessionStorage.setItem(this.VERIFIER_KEY, verifier);
  }

  public getStoredState(): string | null {
    return sessionStorage.getItem(this.STATE_KEY);
  }

  public getStoredVerifier(): string | null {
    return sessionStorage.getItem(this.VERIFIER_KEY);
  }

  public clearSessionData(): void {
    sessionStorage.removeItem(this.STATE_KEY);
    sessionStorage.removeItem(this.VERIFIER_KEY);
  }

  // Token storage keys
  private readonly ACCESS_TOKEN_KEY = 'shopify_customer_access_token';
  private readonly ID_TOKEN_KEY = 'shopify_customer_id_token';
  private readonly REFRESH_TOKEN_KEY = 'shopify_customer_refresh_token';
  private readonly EXPIRES_AT_KEY = 'shopify_customer_expires_at';

  // Store OAuth tokens securely in sessionStorage
  public storeTokens(tokenResponse: {
    access_token: string;
    id_token?: string;
    expires_in: number;
    refresh_token?: string;
  }): void {
    const now = Date.now();
    const expiresAt = now + (tokenResponse.expires_in * 1000);
    
    sessionStorage.setItem(this.ACCESS_TOKEN_KEY, tokenResponse.access_token);
    if (tokenResponse.id_token) {
      sessionStorage.setItem(this.ID_TOKEN_KEY, tokenResponse.id_token);
    } else {
      sessionStorage.removeItem(this.ID_TOKEN_KEY);
    }
    if (tokenResponse.refresh_token) {
      sessionStorage.setItem(this.REFRESH_TOKEN_KEY, tokenResponse.refresh_token);
    } else {
      sessionStorage.removeItem(this.REFRESH_TOKEN_KEY);
    }
    sessionStorage.setItem(this.EXPIRES_AT_KEY, expiresAt.toString());
  }

  public getAccessToken(): string | null {
    return sessionStorage.getItem(this.ACCESS_TOKEN_KEY);
  }

  public getIdToken(): string | null {
    return sessionStorage.getItem(this.ID_TOKEN_KEY);
  }

  public getRefreshToken(): string | null {
    return sessionStorage.getItem(this.REFRESH_TOKEN_KEY);
  }

  public getTokenExpiration(): number | null {
    const expiresAt = sessionStorage.getItem(this.EXPIRES_AT_KEY);
    return expiresAt ? parseInt(expiresAt, 10) : null;
  }

  public isAuthenticated(): boolean {
    const accessToken = this.getAccessToken();
    const expiresAt = this.getTokenExpiration();
    
    if (!accessToken) {
      return false;
    }
    
    if (!expiresAt) {
      return false;
    }
    
    return Date.now() < expiresAt;
  }

  public clearTokens(): void {
    sessionStorage.removeItem(this.ACCESS_TOKEN_KEY);
    sessionStorage.removeItem(this.ID_TOKEN_KEY);
    sessionStorage.removeItem(this.REFRESH_TOKEN_KEY);
    sessionStorage.removeItem(this.EXPIRES_AT_KEY);
  }

  // Start the OAuth login flow
  public async startLogin(): Promise<void> {
    const config = environment.shopifyCustomerAccount;
    
    // Generate state and PKCE parameters
    const state = this.generateState();
    const codeVerifier = this.generateCodeVerifier();
    const codeChallenge = await this.generateCodeChallenge(codeVerifier);
    
    // Store for callback validation
    this.storeSessionData(state, codeVerifier);
    
    // Build authorization URL
    const params = new URLSearchParams({
      client_id: config.clientId,
      scope: config.scope,
      redirect_uri: config.redirectUri,
      response_type: 'code',
      state: state,
      code_challenge: codeChallenge,
      code_challenge_method: 'S256'
    });
    
    const authUrl = `${config.authorizationEndpoint}?${params.toString()}`;
    
    // Redirect to Shopify
    window.location.href = authUrl;
  }

  // Exchange authorization code for tokens
  public async exchangeCodeForTokens(code: string): Promise<{
    access_token: string;
    id_token?: string;
    expires_in: number;
    refresh_token?: string;
  }> {
    const config = environment.shopifyCustomerAccount;
    const verifier = this.getStoredVerifier();
    
    if (!verifier) {
      throw new Error('Missing PKCE code verifier. Please start the login process again.');
    }
    
    const body = new URLSearchParams({
      grant_type: 'authorization_code',
      client_id: config.clientId,
      redirect_uri: config.redirectUri,
      code: code,
      code_verifier: verifier
    });
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    
    try {
      const response = await this.http.post<any>(config.tokenEndpoint, body.toString(), { headers }).toPromise();
      
      if (response.error) {
        throw new Error(response.error_description || response.error);
      }
      
      return {
        access_token: response.access_token,
        id_token: response.id_token,
        expires_in: response.expires_in,
        refresh_token: response.refresh_token
      };
    } catch (error: any) {
      if (error.error?.error_description) {
        throw new Error(error.error.error_description);
      }
      throw new Error('Failed to exchange authorization code for tokens: ' + (error.message || 'Unknown error'));
    }
  }

  // Validate state parameter
  public validateState(returnedState: string): boolean {
    const storedState = this.getStoredState();
    if (!storedState) {
      throw new Error('No stored OAuth state. Please start the login process again.');
    }
    if (storedState !== returnedState) {
      this.clearSessionData();
      throw new Error('OAuth state mismatch. Possible CSRF attack.');
    }
    return true;
  }

  // Logout
  public logout(): void {
    this.clearSessionData();
    this.clearTokens();
    const config = environment.shopifyCustomerAccount;
    window.location.href = config.logoutEndpoint;
  }
}
