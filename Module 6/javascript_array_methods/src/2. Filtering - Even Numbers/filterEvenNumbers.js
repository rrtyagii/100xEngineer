/* Given an array of numbers, use filter to return a new array containing only even numbers. */
const filterEvenNumbers = (numbersArray)=>{
    const result = numbersArray.filter((number) => number % 2 === 0);
    return result; 
}; 

module.exports = (filterEvenNumbers); 