const fetchTweet = async (url, payload) =>{
    const response = await fetch(url, {
        method: 'POST', 
        headers: {'Content-Type': 'application/json',},
        body: JSON.stringify(payload),
    }); 

    if(!response.ok){
        throw new Error('Tweet posting failed');
    } 
    //{post:{content: tweet}} 
    return response.json(); 
}; 

document.addEventListener('DOMContentLoaded', function () {
    const tweetForm = document.getElementById('tweetForm');
    const tweetText = document.getElementById('tweetText');
    const responseDiv = document.getElementById('response');
    
    tweetForm.addEventListener('submit', async function (event) {
        event.preventDefault();
        
        const tweet = tweetText.value;
        const DUMMY_URL = 'https://one00x-data-analysis.onrender.com/posts';

        try {
            const data = await fetchTweet(DUMMY_URL, {post: {content: tweet}});
            console.log("data", data); 
            responseDiv.innerText = `Tweet posted successfully! Tweet ID: ${data.id}`;
        } catch (error) {
            console.log("ERROR: ", error);
            responseDiv.innerText = `Error: ${error.message}`;
        }
    }); 
}); 
