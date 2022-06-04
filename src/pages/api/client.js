import { createClient } from 'contentful';

export const client = createClient({
  // Left off here need to figure out access token not working from env
  accessToken: process.env.NEXT_PUBLIC_CONTETNFUL_SPACE_ID,
  space: process.env.NEXT_PUBLIC_CONTETNFUL_SPACE_ID,
});
