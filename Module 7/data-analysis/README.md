# Marketing Data Analyzer

This code is designed to fetch marketing data, process the received data to identify the frequency of jargon terms, and then post the most frequent jargon term to a specified endpoint.

## How to use:

    Simply run the provided code in a JavaScript environment that supports async/await and fetch functionality.
    Ensure that the provided GET_URL and POST_URL are correct.

## Functions:

    getMarketingData(url, retries, initialDelay): Fetches the marketing data from the given URL. If an HTTP 500 error is encountered, it will retry the request using exponential backoff.

    sortByValue(map): Sorts a Map by its values in descending order.

    populateMapFromArray(result): Populates a Map with array elements as keys and their frequency as values.

    fetchingDataAndProcessing(GET_URL): Fetches the marketing data, processes it to determine the frequency of jargon terms, and prepares the data to be posted.

    postTo100x(GET_URL, POST_URL): Fetches the processed marketing data and posts it to the specified URL.