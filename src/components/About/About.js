import React from 'react';
import { Img } from './AboutStyles';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';

const About = ({ content, parseHTML }) => {
  // May need to refactor this later on due to console errors
  const body = documentToReactComponents(content.body);

  return (
    <Section id='about'>
      <SectionTitle>About Me</SectionTitle>
      <br />
      <br />
      <SectionText className='about-richtext'>
        {/* Optional Image */}
        {content.image.fields ? (
          <Img
            src={content.image.fields.file.url}
            alt={content.image.fields.description}
          />
        ) : (
          ''
        )}
        {body}
      </SectionText>
      <br />
      <br />
      <SectionDivider />
      <br />
      <br />
    </Section>
  );
};

export default About;
