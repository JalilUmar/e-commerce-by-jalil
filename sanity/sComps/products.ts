export const products = {
    name : 'products' ,
    title : 'Products' ,
    type : 'document' ,
    fields :[
        {
            name : 'productImageMain' ,
            title : 'Main Product Image' ,
            type: 'image'
        },
        {
            name : 'productImage2' ,
            title : 'Product Image2' ,
            type: 'array' ,
            of:[{type : 'image'}]
        },
        {
            name : 'productTitle' ,
            title : 'Product Title' ,
            type: 'string'
        },
        {
            name : 'productPrice' ,
            title : 'Product Price' ,
            type: 'number'
        },
        {
            name : 'productDescription' ,
            title : 'Product Description' ,
            type: 'string'
        },
    ]
}