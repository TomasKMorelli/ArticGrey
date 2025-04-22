
export const COLLECTION_PRODUCTS_QUERY = `
  query CollectionProducts($handle: String!) {
    collection(handle: $handle) {
      products(first: 8) {
        edges {
          node {
            id
            title
            handle
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
            variants(first: 1) {
              edges {
                node {
                  id
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const COLLECTION_VIDEO_QUERY = `
  query CollectionVideos($handle: String!) {
    collection(handle: $handle) {
      products(first: 8) {
        edges {
          node {
            id
            title
            handle
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
            variants(first: 1) {
              edges {
                node {
                  id
                }
              }
            }
            metafield(namespace: "custom", key: "video") {
              value
              type
            }
          }
        }
      }
    }
  }
`;



export const BLOGS_QUERY = `
  query BlogArticles {
  blog(handle: "balanced-diet-1") {
    articles(first: 3, sortKey: PUBLISHED_AT, reverse: true) {
      edges {
        node {
          title
          handle
          publishedAt
          excerpt
          author {
            name
          }
          blog {
            title
          }
          image {
            url
            altText
          }
        }
      }
    }
  }
}
`;
