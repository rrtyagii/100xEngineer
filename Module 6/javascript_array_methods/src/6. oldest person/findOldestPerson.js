/**
 * Given an array of objects representing people with a name and age property, first, filter out anyone younger than 18, and then use reduce to find the oldest person's name.
 * @param {object} arrayOfObjects objects representing people with a `name` and `age` properties. 
 */

const findOldestPerson = (arrayOfObjects)=>{
    const adults = arrayOfObjects.filter((person)=>person.age >= 18);  

    if(adults.length === 0) return null; 

    oldestPerson = adults.reduce((oldest, current)=>{
        return current.age > oldest.age ? current : oldest; 
    });
    return oldestPerson.name; 
}; 

module.exports = (findOldestPerson); 