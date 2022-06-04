import React from 'react';
import { Img } from './AboutStyles';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';

const About = ({ content, parseHTML }) => {
  const body = documentToHtmlString(content.body);
  console.log(body);
  return (
    <Section id='about'>
      <SectionTitle>About Me</SectionTitle>
      <br />
      <br />
      <SectionText className='about-richtext'>
        {/* Optional Image */}
        {content.image.fields ? (
          <Img src={content.image.fields.file.url} alt={content.image.fields.description} />
        ) : (
          ''
        )}
        {parseHTML(body)}
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
