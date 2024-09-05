import { shopifyClient } from "./shopify";
import type { ShopQuery } from "./types/admin.generated";

const { data, errors, extensions } = await shopifyClient.request<ShopQuery>(
  `#graphql
  query Shop {
    shop {
      name
    }
  }`,
);

// data?.shop.name is of type string
// you also get autocomplete in the gql string if your lsp supports it
console.log(data?.shop.name);
