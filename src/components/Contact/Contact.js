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
  { title: 'Email', contact: 'mailto:leon.luna.ray@gmail.com' },
  { title: 'Resume', contact: 'Download' },
];

const Contact = () => (
  <Section id='contact'>
    <SectionTitle>Contact</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxText>{card.title}</BoxText>
          <BoxText>{card.contact}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Contact;
