/*
Given an array of strings, use map to capitalize each string and then filter out any that do not start with the letter 'A'.
*/

const capitalizeAndFilter = (names)=>{
    const newName = names.map((name)=>name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()); 
    return newName.filter((name)=>!name.startsWith('A')); 
}; 

module.exports = (capitalizeAndFilter); 