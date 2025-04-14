


export const productQuery = `

products(first:8){
edges {
node{
title
description
tags

images(first:1){
edges{
node{
url
altText
}}
}

variants(first:1){
edges{
node{
price{
amount
currencyCode}
}}

}

}}

}


`