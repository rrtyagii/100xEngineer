const GET_URL = "https://one00x-data-analysis.onrender.com/assignment?email=rishabhtyagi.666@gmail.com"; 
const POST_URL = "https://one00x-data-analysis.onrender.com/assignment"; 

const getMarketingData = async (url) => {
    try{
        const response = await fetch(url, {
            method : "GET",
            headers: {"Content-Type": "application/json",},
        }); 
        
        if(!response.ok){
            throw new Error("Invalid Network Call"); 
        }
        
        const assignment_id = response.headers.get('x-assignment-id'); 
        const data = await response.json(); 

        const body = {
            "assignment_id": assignment_id,
            "bodyData": data,
        }; 

        return body; 
    } catch (error){
        console.log(error); 
    }
}

const sortByValue = (map) => {
    return new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
}

const splitArray = (input_array)=>{
    const result = [];
    input_array.forEach(element => {
        let temp = element.split("-");
        result.push(...temp);
    });
    return result; 
}

const populateMapFromArray= (result)=>{
    let map1 = new Map(); 
    result.forEach((element) => {
        if (map1.has(element)) {
            map1.set(element, map1.get(element) + 1);
        } else {
            map1.set(element, 1); 
        }
    });
    return map1; 
}

const fetchingDataAndProcessing = async (GET_URL) =>{
    const response = await getMarketingData(GET_URL);
    const assignment_id = response.assignment_id; 

    const jargonArray = response.bodyData; 
    
    const jargonFrequency = populateMapFromArray(jargonArray); 

    const sortedFrequency = sortByValue(jargonFrequency); 

    const body = {
        "email" : 'rishabhtyagi.666@gmail.com',
        "answer" : [...sortedFrequency][1][0],
        "assignment_id" : assignment_id, 
    }; 
    return body; 
}

const postTo100x = async (GET_URL, POST_URL)=>{
    try{
        const bodyData = await fetchingDataAndProcessing(GET_URL);
        console.log(bodyData); 
        const response = await fetch(
            POST_URL, 
            {
                method: 'POST',
                headers: {"Content-Type": "application/json",},
                body: JSON.stringify(bodyData),
            }
        );         
        const result = await response.json(); 
        console.log("Success:", result);
    } catch (error){
        console.error("Error:", error);
    }
};

postTo100x(GET_URL, POST_URL); 