import Link from 'next/link';
import React from 'react';
// Icons for social links and logo
import {
  AiFillGithub,
  AiFillLinkedin,
  AiTwotoneMail,
  AiOutlineCode,
} from 'react-icons/ai';

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from './HeaderStyles';

const Header = () => {
  return (
    <Container>
      <Div1>
        <Link href='/'>
          <a style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
            <AiOutlineCode size='4rem' /> <Span> Ray Luna</Span>
          </a>
        </Link>
      </Div1>
      <Div2>
        <li>
          <Link href='#projects'>
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href='#technologies'>
            <NavLink>Technologies</NavLink>
          </Link>
        </li>
        <li>
          {/* Todo Link not working */}
          <Link href='#about'>
            <NavLink>About</NavLink>
          </Link>
        </li>
        <li>
          <Link href='#contact'>
            <NavLink>Contact</NavLink>
          </Link>
        </li>
      </Div2>
      <Div3>
        <SocialIcons href='https://github.com/leon-luna-ray' target='_blank'>
          <AiFillGithub size='3rem' />
        </SocialIcons>
        <SocialIcons
          href='https://www.linkedin.com/in/leon-luna-ray/'
          target='_blank'
        >
          <AiFillLinkedin size='3rem' />
        </SocialIcons>
        <SocialIcons href='mailto:leon.luna.ray@gmail.com'>
          <AiTwotoneMail size='3rem' />
        </SocialIcons>
      </Div3>
    </Container>
  );
};

export default Header;
