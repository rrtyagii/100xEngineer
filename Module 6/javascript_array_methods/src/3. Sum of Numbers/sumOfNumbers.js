/**
 * Given an array of numbers, use reduce to find their sum.
 * @param {number} numbersArray an array of numbers
 * @returns sum of the number elements
 */
const sumOfNumbers = (numbers)=>{
    if(numbers.length === 0){
        return 0; 
    }
    return numbers.reduce((accumulator, currentValue)=>accumulator + currentValue); 
}

module.exports = (sumOfNumbers); 