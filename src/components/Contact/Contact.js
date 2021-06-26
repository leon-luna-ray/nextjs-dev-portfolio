import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiTwotoneMail } from 'react-icons/ai';
import { TiDocumentText } from 'react-icons/ti';
import {
  ExternalLinks,
  Section,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { Box, Boxes, BoxText } from './ContactStyles';

const links = {
  github: 'https://github.com/leon-luna-ray',
  linkedin: 'https://www.linkedin.com/in/leon-luna-ray/',
  email: 'mailto:leon.luna.ray@gmail.com',
  resume: 'Download',
};
const Contact = () => {
  // Add click event to the individual box as a link to each and deploy.
  const handleClick = (e) => {
    e.preventDefault();
    console.log('click!');
  };

  return (
    <Section id='contact'>
      <SectionTitle>Contact</SectionTitle>
      <Boxes>
        <a href='' target='_blank'>
          <Box id='github-box'>
            <AiFillGithub size='5rem' />
            <BoxText>Github</BoxText>
            <BoxText>leon-luna-ray</BoxText>
          </Box>
        </a>
        <Box>
          <AiFillLinkedin size='5rem' />
          <BoxText>Linkedin</BoxText>
          <BoxText>leon-luna-ray</BoxText>
        </Box>
        <Box>
          <AiTwotoneMail size='5rem' />
          <BoxText>Email</BoxText>
          <BoxText>leon.luna.ray@gmail.com</BoxText>
        </Box>
        <Box>
          <TiDocumentText size='5rem' />
          <BoxText>Resume</BoxText>
          <BoxText>Download</BoxText>
        </Box>
      </Boxes>
      <br />
    </Section>
  );
};

export default Contact;
