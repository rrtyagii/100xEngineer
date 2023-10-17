/*
Given an array of names, use `map` to return a new array where every name is capitalized.
*/

const capitalizeNames = (names)=>{
    const newName = names.map((name)=>name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()); 
    return newName; 
}; 

module.exports = (capitalizeNames); 