/**
 * Given an array of words, use `map` to obtain an array of word lengths, and then use `reduce` to get the average word length.
 * @param {string} wordsArray an array of words
 * @returns average word length in the array
 */
const averageWordLength = (wordsArray)=>{
    if(wordsArray.length === 0){
        return 0; 
    }
    const result = wordsArray.map((element)=>element.length); 
    const wordSum = result.reduce((accumulator, currentValue)=>(accumulator+currentValue) , 0); 
    const averageWordLength = wordSum / result.length; 
    return averageWordLength; 
}; 

module.exports = (averageWordLength); 