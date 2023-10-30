# Web Crawler in JavaScript

Start with a page, any page. Crawl a total of 100 pages and create a basic search index for words.

## Setup

Install dependencies by running

```npm install```

to let the program call any URL you can run the local script as
```npm run crawl <url>```

the `url` in the above command can be anything if no URL is passed, it fallbacks to an example URL.


## High Level Design

1. Fetch a Page
2. Extract Content: Title of the page, Body of the page
3. Extract all Links
4. Visit all links in a breadth-first manner i.e. links on the current page get visited first, then links from the first link, then from the second link, and so on...
5. Store the content in an organised fashion for retrieval later.
6. Avoid recursion by maintain a list of links already visited.

## Advanced features that can be tackled later:

1. Respect `/robots.txt`
2. Watch for cache tags and revisit or update page after expiry
3. Make the script configurable.
