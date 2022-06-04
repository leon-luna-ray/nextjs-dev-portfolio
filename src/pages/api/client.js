import { createClient } from 'contentful';

export const client = createClient({
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_API_ACCESS_TOKEN,
  space: process.env.NEXT_PUBLIC_CONTETNFUL_SPACE_ID,
});
