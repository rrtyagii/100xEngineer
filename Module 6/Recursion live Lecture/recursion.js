// lets learn recurison

//find the largest number in a list
//side note: why list and not arrays? 

const largestNormally = (list)=>{
    if(list.length ===0 ){
        return 0; 
    }

    let currentLargest = list[0]; 

    list.forEach((element) => {
        currentLargest = (element > currentLargest) ? element : currentLargest; 
    });

    return currentLargest; 
}; 

numbes = [18, 66, 9, 44, 4, 94, 97, 54, 69, 37]; 

const largestRecursive = (list) =>{
    let first = list[0]; 
    let rest = list.slice(1); 
    if(rest.length === 0){
        return first; 
    }
    const restVariable =  largestRecursive(rest); 
    return (first > restVariable) ? first : restVariable; 
}; 

const largestRecursiveSwanand = (list) =>{
    let first = list[0]; 
    let rest= list.slice(1, list.length); 

    if(rest.length === 0){
        return first; 
    } else{
        let largeRest = largestRecursiveSwanand(rest); 
        if (first > largeRest) {
            return first; 
        } else { 
            return largeRest; 
        }
    }
}; 

const largestRecursiveSpread = ([first, ...rest]) =>{
    if(rest.length === 0){
        return first; 
    } else {
        let largestInRest = largestRecursiveSpread(rest);
        if(largestInRest < first){
            return first; 
        } else{
            return largestInRest ; 
        }
    }
}; 

//console.log( largestRecursiveSwanand(numbes)); 