export const environment = {
  production: false,
  shopDomain: 'angular-headless-demo.myshopify.com',
  storefrontPublicToken: '2d1f5a926e58b9f2c250b38fc297d4a9',
  // Shopify Customer Account OAuth Configuration
  shopifyCustomerAccount: {
    clientId: '414b8adc-53e8-4ddc-8b0e-1758c560b357',
    discoveryUrl: 'https://angular-headless-demo.myshopify.com/.well-known/openid-configuration',
    redirectUri: 'https://dejo-shop.duckdns.org/auth/callback',
    javascriptOrigin: 'https://dejo-shop.duckdns.org',
    scope: 'openid email customer-account-api:full'
  }
};