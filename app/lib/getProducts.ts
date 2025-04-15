import { queryProduct } from "~/graphql/customer-account/products";

export const getProducts = async () => {
    try {
        const response = await fetch(`https://uncmfrtd.myshopify.com/api/2023-10/graphql.json
`, {
            method: "post",
            headers: {
                "Content:type": "application/json",
                'X-Shopify-Storefront-Access-Token': '<2323123123123123>'
            },
            body: JSON.stringify({ query: queryProduct })
        })


    } catch (error) {
        console.log(error);
        throw new Error("error geting products");


    }
}