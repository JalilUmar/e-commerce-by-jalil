
import { defineType, defineField } from "sanity"

export const products = defineType(
    {
        name: 'products',
        title: 'Products',
        type: 'document',
        fields: [
            defineField(
                {
                    name: 'productImageMain',
                    title: 'Main Product Image',
                    type: 'image'
                }
            ),
            defineField(
                {
                    name: 'productImage2',
                    title: 'Product Image2',
                    type: 'array',
                    of: [{ type: 'image' }]
                }
            ),
            defineField(
                {
                    name: 'productTitle',
                    title: 'Product Title',
                    type: 'string'
                }
            ),
            defineField(
                {
                    name: 'productPrice',
                    title: 'Product Price',
                    type: 'number'
                }
            ),
            defineField(
                {
                    name: 'productCategory',
                    title: 'Select Product Category',
                    type: 'reference' ,
                    to : [
                        {
                            type : 'categories'
                        }
                    ]
                }
            ),
            defineField(
                {
                    name: 'productDescription',
                    title: 'Product Description',
                    type: 'string'
                }
            ),
        ]
    }
)