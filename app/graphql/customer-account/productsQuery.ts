export const getProductHandle = `
  query getProduct($handle: String!) {
    productByHandle(handle: $handle) {
      id
      title
      description
      tags
      featuredImage {
        url
        altText
      }
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
      }
    }
  }
`;


export const getAllProductsQuery = `
  query getAllProduct {
    products(first: 10) {
      edges {
        node {
          id
          title
          description
          tags
          featuredImage {
            url
            altText
          }

          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
        }
      }
    }
  }
`;