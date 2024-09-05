import { shopifyClient } from "./shopify";

const { data, errors, extensions } = await shopifyClient.request(
        `#graphql
  query Shop {
    shop {
      name
    }
  }`,
);

console.log(data?.shop.name);
