import Link from "next/link";
import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiTwotoneMail,
  AiOutlineCode,
} from "react-icons/ai";
import { SlGlobe } from "react-icons/sl";
import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = ({ profile }) => {
  return (
    <Container>
      <Div1>
        <Link
          href="/"
          style={{ display: "flex", alignItems: "center", color: "white" }}
        >
          <AiOutlineCode size="4rem" /> <Span>{profile.name}</Span>
        </Link>
      </Div1>
      <Div2>
        <li>
          <Link href="#projects" legacyBehavior>
            <NavLink>Projects</NavLink>
          </Link>
        </li>

        <li>
          <Link href="#technologies" legacyBehavior>
            <NavLink>Skills</NavLink>
          </Link>
        </li>

        <li>
          <Link href="#about" legacyBehavior>
            <NavLink>About</NavLink>
          </Link>
        </li>

        <li>
          <Link href="#contact" legacyBehavior>
            <NavLink>Contact</NavLink>
          </Link>
        </li>
      </Div2>
      <Div3>
        <SocialIcons href={profile.github} target="_blank">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href={profile.linkedin} target="_blank">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href={`mailto:${profile.email}`}>
          <AiTwotoneMail size="3rem" />
        </SocialIcons>
        <SocialIcons href={profile.website} target="_blank">
          <SlGlobe size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
  );
};

export default Header;
