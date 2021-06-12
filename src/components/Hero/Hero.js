import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = props => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Ray Luna <br />
          Developer Portfolio
        </SectionTitle>
        <SectionText>
          I am a full-stack web developer using my skills to create useful
          human-centric web applications with an emphasis on ease of use and
          simple design.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
