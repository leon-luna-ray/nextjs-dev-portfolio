import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiTwotoneMail } from 'react-icons/ai';
import { TiDocumentText } from 'react-icons/ti';
import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxText } from './ContactStyles';

const Contact = ({ content }) => {

  const contactCards = content.contactCards.map(({ fields, sys }) => {
    if (fields.document) {
      return (
        <a key={sys.id} href={fields.document.fields.file.url} target="_blank">
          <Box id='github-box'>
            <TiDocumentText size='5rem' />
            <BoxText>{fields.service}</BoxText>
            <BoxText>{fields.displayName}</BoxText>
          </Box>
        </a>
      );
    }

    return (
      <a key={sys.id} href={fields.link} target='_blank'>
        <Box>
          {fields.service === 'Github' ? (
            <AiFillGithub size='5rem' />
          ) : fields.service === 'Linkedin' ? (
            <AiFillLinkedin size='5rem' />
          ) : fields.service === 'Email' ? (
            <AiTwotoneMail size='5rem' />
          ) : (
            ''
          )}
          <BoxText>{fields.service}</BoxText>
          <BoxText>{fields.displayName}</BoxText>
        </Box>
      </a>
    );
  });

  return (
    <Section id='contact'>
      <SectionTitle>{content.title}</SectionTitle>
      <Boxes>{contactCards}</Boxes>
      <br />
    </Section>
  );
};

export default Contact;
