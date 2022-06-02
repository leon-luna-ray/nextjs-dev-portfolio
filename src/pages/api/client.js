import * as contentful from 'contentful';

export const client = contentful.createClient({
    // Left off here need to figure out access token not working from env
    space:process.env.REACT_APP_CONTETNFUL_SPACE_ID,
    accessToken: process.env.REACT_APP_CONTENTFUL_API_ACCESS_TOKEN,
})