
import { defineType, defineField } from "sanity"

export const category = defineType(
    {
        name: 'categories',
        title: 'Product Categories',
        type: 'document',
        fields: [
            defineField(
                {
                    name: 'name',
                    title: 'Category Name',
                    type: 'string'
                }
            ),
        ]
    }
)