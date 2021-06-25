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

const Technologies = () => (
  <Section id='technologies'>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I create apps with a range of front-end and back-end technologies
    </SectionText>
    <List>
      <ListItem>
        <CgWebsite size='3rem' />
        <br />
        <ListContainer>
          <ListTitle>Front End</ListTitle>
          <ListParagraph>
            <ul className='skills-list'>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>jQuery</li>
            </ul>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <HiOutlineDatabase size='3rem' />
        <br />

        <ListContainer>
          <ListTitle>Back End</ListTitle>
          <ListParagraph>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li></li>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <FaCodeBranch size='3rem' />
          <br />
          <ListTitle>Tools</ListTitle>
          <ListParagraph>
            <ul>
              <li>Git</li>
              <li>Bootstrap</li>
              <li>Materialize</li>
              <li>Firebase</li>
              <li>Handlebars</li>
            </ul>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      {/* Need to find a way to add a 4th column */}
      {/* <ListItem>
        <DiFirebase size='3rem' />
        <br />
        <ListContainer>
          <ListTitle>Skills</ListTitle>
          <ListParagraph>
            <ul>
              <li>MERN</li>
              <li>MVC</li>
              <li>PWA</li>
              <li>Testing</li>
              <li>WebAPIs</li>
            </ul>
          </ListParagraph>
        </ListContainer>
      </ListItem> */}
    </List>
    <br />
    <br />
    <SectionDivider />
    <br />
    <br />
  </Section>
);

export default Technologies;
