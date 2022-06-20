import React from 'react';
import { FaCodeBranch } from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';
import { HiOutlineDatabase } from 'react-icons/hi';
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from './TechnologiesStyles';

const Technologies = ({ content }) => {
  const techListItems = content.fields.categories.map(({ fields, sys }) => {
    const skillListItems = fields.skills.map((skill, index) => {
      return <li key={index}>{skill}</li>;
    });

    return (
      <ListItem key={sys.id}>
        <ListContainer>
          {/* Change icon based on specific category */}
          {fields.title === 'Frontend' ? (
            <CgWebsite size='3rem' />
          ) : fields.title === 'Backend' ? (
            <HiOutlineDatabase size='3rem' />
          ) : fields.title === 'Tools' ? (
            <FaCodeBranch size='3rem' />
          ) : (
            ''
          )}
          <br />
          <ListTitle>{fields.title}</ListTitle>
          <ListParagraph>
            <ul className='skills-list'>{skillListItems}</ul>
          </ListParagraph>
        </ListContainer>
      </ListItem>
    );
  });

  return (
    <Section id='technologies'>
      <SectionTitle>{content.title}</SectionTitle>
      <SectionText>{content.description}</SectionText>
      <List>{techListItems}</List>
      <br />
      <br />
      <SectionDivider />
      <br />
      <br />
    </Section>
  );
};

export default Technologies;
