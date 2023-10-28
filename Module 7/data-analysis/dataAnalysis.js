const URL = "https://one00x-data-analysis.onrender.com/assignment?email=rishabhtyagi.666@gmail.com"; 

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

const fetchingDataAndProcessing = async () =>{
    const response = await getMarketingData(URL);
    const assignment_id = response.assignment_id; 

    const jargonArray = response.bodyData; 
    
    const jargonFrequency = populateMapFromArray(jargonArray); 

    const sortedFrequency = sortByValue(jargonFrequency); 

    const body = {
        "assignment_id" : assignment_id, 
        "answer" : [...sortedFrequency][0][0],
    }; 
    return body; 
}

const postTo100x = async (url)=>{
    try{
        const bodyData = await fetchingDataAndProcessing();
        console.log(bodyData); 
        const response = await fetch(
            url, 
            {
                method: 'POST',
                headers: {"Content-Type": "application/json",},
                body: JSON.stringify({bodyData}),
            }
        ); 
        const result = await response.json(); 
        console.log("Success:", result);
    } catch (error){
        console.error("Error:", error);
    }
};

postTo100x(URL); 


/**
 *     
 * 'x-assignment-id' => {
      name: 'x-assignment-id',
      value: '60885b5d-9648-4aaf-ab8d-7ed351d5712c'
    },
 */

// const test_array = [ 
//     'plug-and-chug', 'immersive-experience', 'swag', 'growth-unit', 'penetrate-the-market', 'swag', 'rubber-meets-the-road', 'impact-map', 'data-points', 'branding', 'circle-back', 'swag', 'bleeding-edge', 'bleeding-edge', 'bleeding-edge', 'ideate', 'out-of-pocket', 'two-way-street', 'sprint-to-the-finish-line', 'out-of-the-box', 'immersive-experience', 'customer-journey', 'synergy', 'give-you-some-time-back', 'bleeding-edge', 'put-a-pin-in-it', 'etc-etc', 'sales-funnel', 'put-a-bow-on-it', 'make-it-actionable', 'heavy-lifting', 'bleeding-edge', 'rubber-meets-the-road', 'rubber-meets-the-road', 'growth-unit', 'infographic', 'out-of-the-box', 'etc-etc', 'sales-funnel', 'value-add', 'two-way-street', 'ideate', 'out-of-pocket', 'tee-it-up', 'button-up-the-loose-ends', 'growth-unit', 'penetrate-the-market', 'bucketize-it', 'get-a-pulse-on', 'impact-map', 'impact-map', 'put-a-pin-in-it', 'out-of-the-box', 'swag', 'growth-unit', 'buying-cycle', 'sales-funnel', 't-shirt-sizes', 'ideate', 'had-to-punt-on-that', 'branding', 'granular', 'thought-leader', 'buying-cycle', 'expansion-play', 'streamline', 'out-of-the-box', 'let-s-take-this-offline', 'out-of-pocket', 'gamification', 'let-s-take-this-offline', 'customer-journey', 'expansion-play', 'put-a-bow-on-it', 'deep-dive', 'synergy', 'bandwidth-constrained', 'make-it-actionable', 'get-a-pulse-on', 'market-share', 'data-points', 'home-stretch', 'impact-map', 'snackable-content', 'immersive-experience', 'deep-dive', 'market-share', 'value-proposition', 'growth-unit', 'data-points', 'market-share', 'thought-leadership', 'button-up-the-loose-ends', 'put-a-bow-on-it', 'deep-dive', 'best-practice', 'value-proposition', 'deep-dive', 'tee-it-up', 'expansion-play'
// ]; 

// const result = splitArray(test_array); 
// const resultMap = populateMapFromArray(result); 
// const sortedResultMap = sortByValue(resultMap);