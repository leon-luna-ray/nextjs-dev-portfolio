import Link from 'next/link';
import React from 'react';
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

const Header = ({ projects, technologies, about, contact, name }) => {
  const contactIcons = contact.fields.contactCards.map(({ fields, sys }) => {
    if (fields.service === 'Github') {
      return (
        <SocialIcons key={sys.id} href={fields.link} target='_blank'>
          <AiFillGithub size='3rem' />
        </SocialIcons>
      );
    }
    if (fields.service === 'Linkedin') {
      return (
        <SocialIcons key={sys.id} href={fields.link} target='_blank'>
          <AiFillLinkedin size='3rem' />
        </SocialIcons>
      );
    }
    if (fields.service === 'Email') {
      return (
        <SocialIcons key={sys.id} href={fields.link}>
          <AiTwotoneMail size='3rem' />
        </SocialIcons>
      );
    }
    return;
  });

  return (
    <Container>
      <Div1>
        <Link
          href='/'
          style={{ display: 'flex', alignItems: 'center', color: 'white' }}>

          <AiOutlineCode size='4rem' /> <Span>{name}</Span>

        </Link>
      </Div1>
      <Div2>
        {projects ? (
          <li>
            <Link href='#projects' legacyBehavior>
              <NavLink>{projects.fields.title}</NavLink>
            </Link>
          </li>
        ) : (
          ''
        )}
        {technologies ? (
          <li>
            <Link href='#technologies' legacyBehavior>
              <NavLink>{technologies.fields.title}</NavLink>
            </Link>
          </li>
        ) : (
          ''
        )}
        {about ? (
          <li>
            <Link href='#about' legacyBehavior>
              <NavLink>{about.fields.title}</NavLink>
            </Link>
          </li>
        ) : (
          ''
        )}
        {contact ? (
          <li>
            <Link href='#contact' legacyBehavior>
              <NavLink>{contact.fields.title}</NavLink>
            </Link>
          </li>
        ) : (
          ''
        )}
      </Div2>
      <Div3>{contactIcons}</Div3>
    </Container>
  );
};

export default Header;
