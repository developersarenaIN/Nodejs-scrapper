const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');

const app = express();
const port = 3000;

app.get('/get', (req, res) => {
    // Get website URL from query parameter
    const websiteUrl = req.query.www;

    // Make HTTP request to website URL
    axios.get(websiteUrl)
        .then(response => {
            // Load HTML content into Cheerio
            const $ = cheerio.load(response.data);

            // Extract email addresses from links
            const emailLinks = $('a[href^="mailto:"]');
            const emailsFromLinks = emailLinks.map((i, el) => $(el).attr('href').replace(/^mailto:/, '')).get();

            // Extract email addresses from text on the page
            const text = $('body').text();
            const emailRegex = /[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
            const emailsFromText = text.match(emailRegex);

            // Combine the two arrays of email addresses
            const emails = [...emailsFromLinks, ...emailsFromText];

            // Extract phone numbers
            const phoneNumbers = text.match(/\d{10}/g);

            // Return results as JSON
            res.json({ emails, phoneNumbers });
        })
        .catch(error => {
            console.error(error);
            res.status(500).send('Error scraping website');
        });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
