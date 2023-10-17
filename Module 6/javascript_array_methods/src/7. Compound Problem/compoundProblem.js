/**
 * Given an array of products with properties name, price, and quantity, use:
 * - filter to keep products that have more than 10 items in quantity.
 * - map to get an array of product prices.
 * - reduce to get the total cost of all the products.
 * 
 * @param {object} products an array of objects with properties `name`, `price` and `quantity`
 * @returns totalCost of all the products
 */

const compoundProblem = (products)=>{
    const productMoreThanTen = products.filter((product)=>product.quantity >=10); 
    if(productMoreThanTen.length === 0) return 0; 

    //const priceArray = productMoreThanTen.map((product)=>product.price); 

    const totalPrice = productMoreThanTen.reduce((total, current)=>{
        return total + current.price * current.quantity; 
    }, 0); 
    return totalPrice; 
}; 

module.exports = compoundProblem; 