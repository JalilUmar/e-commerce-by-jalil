import { type SchemaTypeDefinition } from 'sanity'
import { products } from './sComps/products'
import { category } from './sComps/categories'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products , category ],
}
  