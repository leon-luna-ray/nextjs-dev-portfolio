import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiTwotoneMail } from 'react-icons/ai';
import { TiDocumentText } from 'react-icons/ti';
import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxText } from './ContactStyles';

const data = [
  { title: 'Github', contact: 'https://github.com/leon-luna-ray' },
  { title: 'Linkedin', contact: 'https://www.linkedin.com/in/leon-luna-ray/' },
  { title: 'Email', contact: 'leon.luna.ray@gmail.com' },
  { title: 'Resume', contact: 'Download' },
];

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
        <Box id='github-box' onClick={handleClick}>
          <AiFillGithub size='5rem' />
          <BoxText>Github</BoxText>
          <BoxText>leon-luna-ray</BoxText>
        </Box>
        <Box onClick={handleClick}>
          <AiFillLinkedin size='5rem' />
          <BoxText>Linkedin</BoxText>
          <BoxText>leon-luna-ray</BoxText>
        </Box>
        <Box onClick={handleClick}>
          <AiTwotoneMail size='5rem' />
          <BoxText>Email</BoxText>
          <BoxText>leon.luna.ray@gmail.com</BoxText>
        </Box>
        <Box onClick={handleClick}>
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
