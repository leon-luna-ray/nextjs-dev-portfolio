import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2023-04-14",
  useCdn: false
});

const builder = imageUrlBuilder(client);

export function getImageUrl(source) {
  return builder.image(source);
}

export async function fetchProfile() {
  // Sanity queires are in the GROQ query language
  const query = `*[_type == "profileDetails"][0]`;
  const profile = await client.fetch(query);

  return profile;
}

export async function fetchHobbies() {
  const query = `*[_type == "profileDetails"][0] { "hobbies" : hobbies[] -> {title} }`;
  const hobbies = await client.fetch(query);

  return hobbies;
}

export async function fetchFeaturedProjects() {
  const query = `*[_type == "project" && featured] | order(_updatedAt desc)`;
  const projects = await client.fetch(query);

  return projects;
}

export async function fetchSkills() {
  const query = `*[_type == "skillsList"] | order(title) {title, "skills" : skills[] -> {title, website}}`;
  const skills = await client.fetch(query);

  return skills;
}
