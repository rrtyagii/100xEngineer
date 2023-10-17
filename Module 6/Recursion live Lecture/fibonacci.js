// const fib = (aGivenNumber) => {

//     if(aGivenNumber === 0 || aGivenNumber === 1){
//         return aGivenNumber; 
//     }

//     return fib(aGivenNumber-1) + fib(aGivenNumber - 2);
// }

person = {
    "name": "john vanderbilt",
    "city_name": "salt lake city",
    "country": "usa",
    "zip_code": "84103"
}

const capitalizeNames = (names)=>{
    const newName = names.map((name)=>name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()); 
    return newName; 
}; 

const arrayToString = (arr)=>{
    const newString = arr.join(" "); 
    return newString; 
}

const nameArray = person.name.split(" "); 
const cityArr = person.city_name.split(" "); 


names = capitalizeNames(nameArray)
city = capitalizeNames(cityArr); 


console.log(arrayToString(names));
console.log(arrayToString(city) + ", " + person.country.toUpperCase() + ", " + person.zip_code );