import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_SANITY_DATASET,
  apiVersion: "2023-04-14",
  useCdn: false
});