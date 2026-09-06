public logout(): void {  this.getDiscovery().then(discovery => {    const idToken = sessionStorage.getItem(this.ID_TOKEN_KEY);
    const logoutUrl = new URL(discovery.end_session_endpoint);

    if (idToken) {
      logoutUrl.searchParams.set('id_token_hint', idToken);
    }

    logoutUrl.searchParams.set(
      'post_logout_redirect_uri',
      'https://dejo-shop.duckdns.org'
    );

    this.clearSessionData();

    window.location.href = logoutUrl.toString();
  }).catch(error => {
    console.error('Failed to retrieve discovery configuration for logout:', error);
  });
}
