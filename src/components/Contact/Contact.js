import React from "react";
import { AiFillGithub, AiFillLinkedin, AiTwotoneMail } from "react-icons/ai";
import { TiDocumentText } from "react-icons/ti";
import { SlGlobe } from "react-icons/sl";
import { Section, SectionTitle } from "../../styles/GlobalComponents";
import { Box, Boxes, BoxText } from "./ContactStyles";

const Contact = ({ content, profile }) => {
  const contactCards = content.fields.contactCards.map(({ fields, sys }) => {
    if (fields.document) {
      return (
        <a key={sys.id} href={fields.document.fields.file.url} target="_blank">
          <Box id="github-box">
            <TiDocumentText size="5rem" />
            <BoxText>{fields.service}</BoxText>
            <BoxText>{fields.displayName}</BoxText>
          </Box>
        </a>
      );
    }

    return (
      <a key={sys.id} href={fields.link} target="_blank">
        <Box>
          {fields.service === "Github" ? (
            <AiFillGithub size="5rem" />
          ) : fields.service === "Linkedin" ? (
            <AiFillLinkedin size="5rem" />
          ) : fields.service === "Email" ? (
            <AiTwotoneMail size="5rem" />
          ) : (
            ""
          )}
          <BoxText>{fields.service}</BoxText>
          <BoxText>{fields.displayName}</BoxText>
        </Box>
      </a>
    );
  });

  return (
    <Section id="contact">
      <SectionTitle>Contact Me</SectionTitle>
      <Boxes>
        <a href={profile.github} target="_blank">
          <Box>
            <AiFillGithub size="5rem" />
            <BoxText>Github</BoxText>
            <BoxText>{profile.github_user}</BoxText>
          </Box>
        </a>
        <a href={profile.linkedin} target="_blank">
          <Box>
            <AiFillLinkedin size="5rem" />
            <BoxText>Linkedin</BoxText>
            <BoxText>{profile.linkedin_user}</BoxText>
          </Box>
        </a>
        <a href={profile.website} target="_blank">
          <Box>
            <SlGlobe size="5rem" /> 
            <BoxText>Website</BoxText>
            <BoxText>{profile.website_name}</BoxText>
          </Box>
        </a>
        <a href={`mailto:${profile.email}`}>
          <Box>
            <AiTwotoneMail size="5rem" />
            <BoxText>Email</BoxText>
            <BoxText>{profile.email}</BoxText>
          </Box>
        </a>
      </Boxes>
      <br />
    </Section>
  );
};

export default Contact;
