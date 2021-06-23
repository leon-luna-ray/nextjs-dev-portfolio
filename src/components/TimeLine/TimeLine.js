import React, { useState, useRef, useEffect } from 'react';

import {
  CarouselButton,
  CarouselButtonDot,
  CarouselButtons,
  CarouselContainer,
  CarouselItem,
  CarouselItemImg,
  CarouselItemText,
  CarouselItemTitle,
  CarouselMobileScrollNode,
} from './TimeLineStyles';
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

// const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  // const [activeItem, setActiveItem] = useState(0);
  // const carouselRef = useRef();

  // const scroll = (node, left) => {
  //   return node.scrollTo({ left, behavior: 'smooth' });
  // }

  // const handleClick = (e, i) => {
  //   e.preventDefault();

  //   if (carouselRef.current) {
  //     const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));

  //     scroll(carouselRef.current, scrollLeft);
  //   }
  // }

  // const handleScroll = () => {
  //   if (carouselRef.current) {
  //     const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

  //     setActiveItem(index);
  //   }
  // }

  // // snap back to beginning of scroll when window is resized
  // // avoids a bug where content is covered up if coming from smaller screen
  // useEffect(() => {
  //   const handleResize = () => {
  //     scroll(carouselRef.current, 0);
  //   }

  //   window.addEventListener('resize', handleResize);
  // }, []);

  return (
    <Section id='about'>
      <SectionDivider />
      <br />
      <br />
      <br />
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        I'm Ray. I am a Full-stack web developer. I use my new skills to create
        useful human-centric web applications with an emphasis on ease of use
        and simple design. I recently earned my certificate in full stack
        development from the University of Oregon Coding Bootcamp.
      </SectionText>
      <SectionText>
        The reason I got into coding is because find it allows me to constantly
        challenge myself. I love to learn and I'm always looking for something
        new to expand my knowledge that I can apply to find real-world
        solutions. I have an interest in both front-end and back-end
        development, learning new languages and technologies.
      </SectionText>
      <SectionText>
        Originally from Mexicali, Mexico and currently living in the Portland,
        Oregon metro area. My hobbies are camping, hiking, birdwatching,
        cooking, language, travel and photography.
      </SectionText>
    </Section>
  );
};

export default Timeline;
