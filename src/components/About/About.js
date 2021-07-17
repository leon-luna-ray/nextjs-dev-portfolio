import React from 'react';
import { Img } from './AboutStyles';

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';

const About = () => {
  return (
    <Section id='about'>
      <SectionTitle>About Me</SectionTitle>
      <br />
      <br />
      <SectionText>
        {/* Personal profile image */}
        <Img src='/images/ray-1x1.jpg' />
        Hi I'm Ray! I am a Full-stack web developer. I use my skills to create
        useful human-centric web applications with an emphasis on ease of use
        and simple design.
      </SectionText>
      <SectionText>
        The reason I got into coding is because it allows me to constantly
        challenge myself to learn. I love to learn and I am always looking to
        further expand my knowledge. Coding has inspired me to create new apps
        that I personally find useful using the latest technologies. I am proud
        that when I now have a problem that could be solved with a computer, I
        can find a solution using ES6 JavaScript or my personal favorite:
        React.js. I recently earned my certificate in full-stack development
        from the University of Oregon Coding Bootcamp.
      </SectionText>
      <SectionText>
        I am from Mexicali, Mexico. I grew up living in the Portland, Oregon
        Metro Area. My hobbies are camping, hiking, birdwatching, cooking,
        language, travel and photography.
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
