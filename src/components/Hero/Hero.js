import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';

const Hero = ({ name, title, intro }) => {
  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          {name} <br />
          {title}
        </SectionTitle>
        <SectionText>{intro}</SectionText>
      </LeftSection>
    </Section>
  );
};

export default Hero;
