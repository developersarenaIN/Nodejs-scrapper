<h1>Node.js API Scraper</h1>
This repository contains code for a simple Node.js API scraper that extracts <h4>email addresses and phone numbers</h4> from a given URL or text. The API is built using the AWS Lambda serverless architecture and can be deployed to the AWS cloud using the Serverless Framework.

The scraper uses the axios library to make HTTP requests to the target URL, and the cheerio library to parse the HTML and extract email addresses and phone numbers using regular expressions. The API is built using ES module syntax and can be deployed to an AWS Lambda function using the Serverless Framework.

To use the API, simply make an HTTP GET request to the API endpoint with a url query parameter that contains the URL you want to scrape. The API will respond with a JSON object containing the extracted email addresses and phone numbers.

Feel free to fork this repository or use the code as a starting point for your own Node.js API scraper projects!

to use API 
https://1itnsncc2e.execute-api.us-east-1.amazonaws.com/default/infoscraper?url=your_url

https://1itnsncc2e.execute-api.us-east-1.amazonaws.com/default/infoscraper?url=https://developersarena.in/
