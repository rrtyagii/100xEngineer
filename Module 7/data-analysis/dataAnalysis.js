// Define URLs for getting and posting data
const GET_URL = "https://one00x-data-analysis.onrender.com/assignment?email="; 
const POST_URL = "https://one00x-data-analysis.onrender.com/assignment"; 

// Constants for retry logic
const MAX_RETRIES = 5; 
const INITIAL_DELAY = 1000 // In milli-seconds 1 second delay

/**
 * Fetches the marketing data. In case of HTTP 500 error, retries the request.
 */
const getMarketingData = async (url, retries=MAX_RETRIES, initialDelay=INITIAL_DELAY) => {
    try{
        const response = await fetch(url, {
            method : "GET",
            headers: {"Content-Type": "application/json",},
        }); 

        if (response.status === 500 && retries > 0) {
            console.log(`Received HTTP 500. Retrying in ${initialDelay}ms...`);
            await new Promise(res => setTimeout(res, initialDelay));
            return fetchWithRetry(url, retries - 1, initialDelay * 2);
        }
        
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

/**
 * Sorts a Map by its values in descending order.
 */
const sortByValue = (map) => {
    return new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
}

/**
 * Populates a Map with array elements as keys and their frequency as values.
 */
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

/**
 * Fetches the marketing data, processes it to determine the frequency of jargon terms, and prepares the data to be posted.
 */
const fetchingDataAndProcessing = async (GET_URL) =>{
    const response = await getMarketingData(GET_URL);
    const assignment_id = response.assignment_id; 

    const jargonArray = response.bodyData; 
    
    const jargonFrequency = populateMapFromArray(jargonArray); 

    const sortedFrequency = sortByValue(jargonFrequency); 

    const body = {
        "answer" : [...sortedFrequency][1][0],
        "assignment_id" : assignment_id, 
    }; 

    return body; 
}

/**
 * Fetches the processed marketing data and posts it to the specified URL.
 */
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

// Invoke the main function to post the data
postTo100x(GET_URL, POST_URL); 
