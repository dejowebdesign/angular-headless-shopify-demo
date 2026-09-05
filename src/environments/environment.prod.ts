export const environment = {
  production: true,
  shopDomain: 'angular-headless-demo.myshopify.com',
  storefrontPublicToken: '2d1f5a926e58b9f2c250b38fc297d4a9',
  // Shopify Customer Account OAuth Configuration
  shopifyCustomerAccount: {
    clientId: '414b8adc-53e8-4ddc-8b0e-1758c560b357',
    authorizationEndpoint: 'https://shopify.com/authentication/79193637022/oauth/authorize',
    tokenEndpoint: 'https://shopify.com/authentication/79193637022/oauth/token',
    logoutEndpoint: 'https://shopify.com/authentication/79193637022/logout',
    redirectUri: 'https://dejo-shop.duckdns.org/auth/callback',
    javascriptOrigin: 'https://dejo-shop.duckdns.org',
    scope: 'openid email customer-account-api:full'
  }
};
