import React from 'react';
import { FaReact, FaDatabase, FaCodeBranch } from 'react-icons/fa';
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
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>I create apps with these technologies</SectionText>
    <List>
      <ListItem>
        <FaReact size='3rem' />
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
        <FaDatabase size='3rem' />
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
          <ListTitle>Tools</ListTitle>
          <ListParagraph>
            <ul>
              <li>Bootstrap</li>
              <li>Materialize</li>
              <li>Firebase</li>
              <li>Handlebars</li>
              <li>MERN Stack</li>
            </ul>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      {/* Need to find a way to add a 4th column */}
      {/* <ListItem>
        <DiFirebase size='3rem' />
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
  </Section>
);

export default Technologies;
