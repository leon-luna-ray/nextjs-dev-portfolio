import React from 'react';
import { getImageUrl } from '../../pages/api/sanity';
import { Img } from './AboutStyles';


import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';

const About = ({ profile }) => {
  const imageUrl = getImageUrl(profile.image).size(400, 400).url()

  return (
    <Section id='about'>
      <SectionTitle>About Me</SectionTitle>
      <br />
      <br />
      <SectionText className='about-richtext'>
        {imageUrl ? <Img src={imageUrl} alt='Ray Luna'/> : ''}
        {profile?.bio}
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
