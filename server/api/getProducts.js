import { defineEventHandler } from 'h3' // Adjust the import based on your framework
import { Products } from '~/data/Products/index.js'
export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    if(body){
        console.log(">>>>>Products",Products)
        const Products2 = await Products
        let id = parseInt(body.slug)    
        if(id !== undefined && id !== null){
            return Products.find(product => product.id === id );
        }
    }
    return Products;
})