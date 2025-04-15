export const queryProduct = `

{
products(first:5){
edges{
node{
title
description
variants(first:1){
edges{
node{
price{
amount
currencyCode}}}}
featuredImage{
url
altText}

}}
}

}
`