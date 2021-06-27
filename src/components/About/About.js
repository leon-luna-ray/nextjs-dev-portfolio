import React from 'react';
import { Img } from './AboutStyles';

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';

const Timeline = () => {
  // Final addition of profile picture will go in the about section. Project will then be ready for deployment.
  // Clean up code and comments after this is complete.
  return (
    <Section id='about'>
      <SectionTitle>About Me</SectionTitle>
      <br />
      <br />
      <SectionText>
        <Img src='/images/ray-1x1.jpg' />
        Hi I'm Ray! I am a Full-stack web developer. I use my new skills to
        create useful human-centric web applications with an emphasis on ease of
        use and simple design.
      </SectionText>
      <SectionText>
        The reason I got into coding is because find it allows me to constantly
        challenge myself. I love to learn and I am always looking for something
        new to expand my knowledge and inspire me to create new apps. I have an
        interest in both front-end and back-end development, learning new
        languages and technologies. I recently earned my certificate in full
        stack development from the University of Oregon Coding Bootcamp.
      </SectionText>
      <SectionText>
        I am from Mexicali, Mexico, I grew up living in the Portland, Oregon
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

export default Timeline;
