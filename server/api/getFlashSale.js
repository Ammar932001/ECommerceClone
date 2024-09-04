import { defineEventHandler } from 'h3' // Adjust the import based on your framework
import { Products } from '~/data/Products/index.js'
export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    if(body){
        const Products2 = await Products
        let category = body.slug    
        if(category !== undefined && category !== null){
            if(category === 'flash_sale'){
                return Products.filter(product => product.flash_sale === true);
            } else {
                return Products.filter(product => product.best_selling === true);
            }
        }
    }
    return body;
})