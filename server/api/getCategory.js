import { defineEventHandler } from 'h3' // Adjust the import based on your framework
import { Products } from '~/data/Products/index.js'
export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    if(body){
        const Products2 = await Products
        let category = body.slug    
        if(category !== undefined && category !== null){
            if(typeof category === 'number'){
                return Products.filter(product => product.category_id === category);
            } else {
                return Products.filter(product => product.category === category);
            }
        }
    }
    return body;
})