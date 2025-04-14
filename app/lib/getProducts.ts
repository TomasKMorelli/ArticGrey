
import { productQuery } from "~/graphql/customer-account/products";


export const getProducts = async () => {
    
try {
    
const response = await fetch (`https://uncmfrtd-com.myshopify.com/api/2023-04/graphql.json` , {
    method:"post",
    headers: {"Contet-type":"application/json"},
    body: JSON.stringify({query:productQuery})
})

const data = await response.json(
)
return data

} catch (error) {
    console.log(`Erro with fetching products` , error);
    throw new Error("error critical");
    
    
}



}