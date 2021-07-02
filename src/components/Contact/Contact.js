import React from 'react';
// icons for buttons
import { AiFillGithub, AiFillLinkedin, AiTwotoneMail } from 'react-icons/ai';
import { TiDocumentText } from 'react-icons/ti';
import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxText } from './ContactStyles';

const links = {
  github: 'https://github.com/leon-luna-ray',
  linkedin: 'https://www.linkedin.com/in/leon-luna-ray/',
  email: 'mailto:leon.luna.ray@gmail.com',
  resume: './pdf/07-02-ray-luna-resume.pdf',
};

// Future steps to load the buttons dynamically
const Contact = () => {
  return (
    <Section id='contact'>
      <SectionTitle>Contact</SectionTitle>
      <Boxes>
        <a href={links.github} target='_blank'>
          <Box id='github-box'>
            <AiFillGithub size='5rem' />
            <BoxText>Github</BoxText>
            <BoxText>leon-luna-ray</BoxText>
          </Box>
        </a>
        <a href={links.linkedin} target='_blank'>
          <Box>
            <AiFillLinkedin size='5rem' />
            <BoxText>Linkedin</BoxText>
            <BoxText>leon-luna-ray</BoxText>
          </Box>
        </a>
        <a href={links.email} target='_blank'>
          <Box>
            <AiTwotoneMail size='5rem' />
            <BoxText>Email</BoxText>
            <BoxText>leon.luna.ray@gmail.com</BoxText>
          </Box>
        </a>
        <a href={links.resume} download='ray-luna-resume'>
          <Box>
            <TiDocumentText size='5rem' />
            <BoxText>Resume</BoxText>
            <BoxText>Download</BoxText>
          </Box>
        </a>
      </Boxes>
      <br />
    </Section>
  );
};

export default Contact;
