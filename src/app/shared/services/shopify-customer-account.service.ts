import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShopifyCustomerAccountService {

  private readonly STATE_KEY = 'shopify_oauth_state';
  private readonly VERIFIER_KEY = 'shopify_oauth_verifier';

  constructor() {}

  // Generate a random string for state or code_verifier
  private generateRandomString(length: number): string {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~';
    let text = '';
    const cryptoObj = window.crypto || (window as any).msCrypto;
    if (cryptoObj && cryptoObj.getRandomValues) {
      const array = new Uint8Array(length);
      cryptoObj.getRandomValues(array);
      for (let i = 0; i < length; i++) {
        text += possible.charAt(array[i] % possible.length);
      }
    } else {
      for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
    }
    return text;
  }

  // Generate PKCE code_verifier (43 to 128 characters)
  public generateCodeVerifier(): string {
    return this.generateRandomString(64);
  }

  // Generate SHA-256 code_challenge from code_verifier
  public async generateCodeChallenge(verifier: string): Promise<string> {
    const encoder = new TextEncoder();
    const data = encoder.encode(verifier);
    const digest = await window.crypto.subtle.digest('SHA-256', data);
    return this.base64UrlEncode(digest);
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
}
