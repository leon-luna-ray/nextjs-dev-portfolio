import React from 'react';

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';

const Timeline = () => {
  return (
    <Section id='about'>
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        Hi I'm Ray! I am a Full-stack web developer. I use my new skills to
        create useful human-centric web applications with an emphasis on ease of
        use and simple design.
      </SectionText>
      <SectionText>
        The reason I got into coding is because find it allows me to constantly
        challenge myself. I love to learn and I'm always looking for something
        new to expand my knowledge that I can apply to find real-world
        solutions. I have an interest in both front-end and back-end
        development, learning new languages and technologies. I recently earned
        my certificate in full stack development from the University of Oregon
        Coding Bootcamp.
      </SectionText>
      <SectionText>
        I'm from Mexicali, Mexico and grew up living in the Portland, Oregon
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
