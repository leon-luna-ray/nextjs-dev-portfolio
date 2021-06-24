import React from 'react';

import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './ContactStyles';

const data = [
  { title: 'Github', contact: 'https://github.com/leon-luna-ray' },
  { title: 'Linkedin', contact: 'https://www.linkedin.com/in/leon-luna-ray/' },
  { title: 'Email', contact: 'leon.luna.ray@gmail.com' },
  { title: 'Resume', contact: 'Download' },
];

const Contact = () => (
  // Add click event to the individual box
  <Section id='contact'>
    <SectionTitle>Contact</SectionTitle>
    <Boxes>
      <Box id='github'>
        <BoxText>Github</BoxText>
        <BoxText>leon-luna-ray</BoxText>
      </Box>
      <Box>
        <BoxText>Linkedin</BoxText>
        <BoxText>leon-luna-ray</BoxText>
      </Box>
      <Box>
        <BoxText>Email</BoxText>
        <BoxText>leon.luna.ray@gmail.com</BoxText>
      </Box>
      <Box>
        <BoxText>Resume</BoxText>
        <BoxText>Download</BoxText>
      </Box>
    </Boxes>
  </Section>
);

export default Contact;
