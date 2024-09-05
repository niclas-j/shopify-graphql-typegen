import { createAdminApiClient } from '@shopify/admin-api-client';

const shopifyClient = createAdminApiClient({
        storeDomain: process.env.SHOPIFY_STORE_DOMAIN as string,
        apiVersion: '2024-07',
        accessToken: process.env.SHOPIFY_API_KEY as string,
});

export {
        shopifyClient,
}

