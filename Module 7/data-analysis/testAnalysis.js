const dataAnalysis = async () => {
    const fetchData = async () => {
      let response;
      let id;
      let data;
      let maximum;
  
      try {
        response = await fetch(
          "https://one00x-data-analysis.onrender.com/assignment?email=ayushsaxena0399@gmail.com"
        );
        id = response.headers.get("x-assignment-id"); // assignment_id
        data = await response.json(); // data - array of phrases
      } catch (error) {
        console.log(`Error occured in fetchData(): ${error}`);
      }
  
      return [id, data]; // fetch() returns an array containing the assignment_id and data
    };
  
    const dataArray = await fetchData(); // storing the returned array in dataArray
    const assignment_id = dataArray[0];  // storing the assignment_id
    let count = 0;
  
    // function processData() - takes the dataArray for processing. 
    // array frequencyCount - contains the frequency count of each element 
    // const maximum - containts the max frequency count
    // array frequent - containts all the sorted elements with highest frequency (repeated elements too)
    // array words - contains unique words with highest frequency 
  
    const processData = (data) => {
      let frequencyCount = data.map((element) => {
        count = 0;
        data.forEach((item) => {
          if (element === item) {
            count++;
          }
        });
        return count;
      });

      console.log("frequencyCount ", frequencyCount); 
  
      maximum = Math.max(...frequencyCount);

      console.log("maximum ", maximum); 

      let frequent = [];
  
      frequencyCount.forEach((element, i) => {
        if (element === maximum) {
          frequent.push(data[i]);
        }
      });
      frequent.sort();
      console.log("frequent ", frequent); 
  
      let words = [];
  
      for (i = 0; i < frequent.length - 2; i++) {
        if (words.length === 0) {
          words.push(frequent[0]);
        }
        if (frequent[i] !== frequent[i + 1]) {
          words.push(frequent[i + 1]);
        }
      }
      console.log("words ", words); 
      return words;
    };
  
    const frequentWords = processData(dataArray[1]); // frequentWords contains the returned highest frequency words array 
    console.log("frequentWords ", frequentWords); 
    // postData() - takes answer as argument and post the data on required url, returns the response received
    const postData = async (answer) => {
      let responsePost;
      let dataPost;
      try {
        responsePost = await fetch(
          "https://one00x-data-analysis.onrender.com/assignment",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              assignment_id: assignment_id,
              answer: answer,
            }),
          }
        );
  
        dataPost = await responsePost.json();
      } catch (error) {
        console.log(`Error in postData: ${error} `);
      }
      return dataPost;
    };
  
    let responseData;
  
    // using for loop to post as two requests are to be made
    for (i = 0; i < frequentWords.length; i++) {
      responseData = await postData(frequentWords[i]);
      console.log(`Response for answer '${frequentWords[i]}'(${maximum}):`);
      console.log(responseData);
    }
  };
  
  dataAnalysis();