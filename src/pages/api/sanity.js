import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2023-04-14",
  useCdn: false,
});

const builder = imageUrlBuilder(client);

export function getImageUrl(source) {
  return builder.image(source);
}

export async function fetchGlobal() {
  // Sanity queries are in the GROQ query language
  const query = `*[_type == "globalSettings"][0]`;
  const global = await client.fetch(query);

  return global;
}

export async function fetchProfile() {
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
  const query = `*[_type == "project" && featured] | order(_updatedAt desc) {_id, _key, title, description, featured, mainImage, repository, slug, status, url, "technologies" : technologies[] -> {_id, title, website}}`;
  const projects = await client.fetch(query);

  return projects;
}

export async function fetchSkills() {
  const query = `*[_type == "skillsList"] | order(title) {_id, title, "skills" : skills[] -> {_id, title, website}}`;
  const skills = await client.fetch(query);

  return skills;
}
