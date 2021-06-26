import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => {
  return (
    <Section row nopading>
      <LeftSection>
        <SectionTitle main center>
          Ray Luna <br />
          Developer Portfolio
        </SectionTitle>
        <SectionText>
          I am a full-stack web developer creating useful human-centric web
          applications with an emphasis on ease of use and simple design.
        </SectionText>
      </LeftSection>
    </Section>
  );
};

export default Hero;
