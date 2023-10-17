const sumOfSquaredPrimeNumbers = (numbersArray)=>{
    const primeNumbersArray = numbersArray.filter((number)=>{
        if (number < 2) {
            return false;
        }
        for (let j = 2; j <= Math.sqrt(number); j++) {
            if (number % j === 0) {
                return false;
            }
        }
        return true;
    });
    
    const sumOfSqPrime = primeNumbersArray.reduce((total, num) => total + num * num, 0);
    return sumOfSqPrime;
}; 

module.exports = sumOfSquaredPrimeNumbers; 