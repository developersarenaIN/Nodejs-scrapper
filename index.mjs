import axios from 'axios';
import cheerio from 'cheerio';

export const handler = async (event, context) => {
  try {
    const { url } = event.queryStringParameters;
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const emailRegex = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi;
    const phoneRegex = /(\d{3}-\d{3}-\d{4})/g;

    const emails = $('body')
      .text()
      .match(emailRegex);

    const phones = $('body')
      .text()
      .match(phoneRegex);

    return {
      statusCode: 200,
      body: JSON.stringify({
        emails,
        phones,
      }),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Error scraping website',
      }),
    };
  }
};
