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

const queryGlobalSettings = `*[_type == "globalSettings"][0]`
const querySkillsGroups = `*[_type == "skillsList"] | order(title) {title, "skills" : skills[] -> {title, website}}`;
const queryProfile = `*[_type == "profileDetails"][0]{
    ...,
    "image": image.asset->{
      _id,
      title,
      altText,
      description,
    }
  }`
const queryProjectGroup = (slug) => {
  return `*[_type == "projectGroup" && slug.current == "${slug}"] | order(title asc) {
      _id,
      title,
      slug,
      description,
      projects[]->{
        _id, 
        intro, 
        "mainImage": mainImage.asset->{
          _id,
          title,
          altText,
          description,
        }, 
        slug, 
        status, 
        title, 
        technologies[]->{_id, title, slug,},
      },
    }[0]`;
}

// API Requests
export async function fetchHomePage() {
  const query = `{
      "global": ${queryGlobalSettings},
      "profile": ${queryProfile},
      "projects": ${queryProjectGroup('nextjs-portfolio')},
      "skillsGroups": ${querySkillsGroups}
  }`;
  const data = await client.fetch(query);

  return data;
}
