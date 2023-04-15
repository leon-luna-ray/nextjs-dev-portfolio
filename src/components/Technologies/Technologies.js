import React from "react";
import { FaCodeBranch } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { HiOutlineDatabase } from "react-icons/hi";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
  ListLink
} from "./TechnologiesStyles";

const Technologies = ({ skills }) => {
  const listItems = (items) => {
    return items.map((item) => {
      if (item.website) {
        return (
          <ListItem key={item._id}>
            <ListLink href={item.website} target="_blank">
              {item.title}
            </ListLink>
          </ListItem>
        );
      }
      return <li key={item._id}>{item.title}</li>;
    });
  };

  const skillsList = skills.map((skill) => {
    return (
      <div key={skill._id}>
        <ListContainer>
          {skill.title === "Frontend" ? (
            <CgWebsite size="3rem" />
          ) : skill.title === "Backend" ? (
            <HiOutlineDatabase size="3rem" />
          ) : skill.title === "Tools" ? (
            <FaCodeBranch size="3rem" />
          ) : (
            ""
          )}
          <br />
          <ListTitle>{skill.title}</ListTitle>
          <ListParagraph>
            <ul className="skills-list">{listItems(skill.skills)}</ul>
          </ListParagraph>
        </ListContainer>
      </div>
    );
  });

  return (
    <Section id="technologies">
      <SectionTitle>Development Skills</SectionTitle>
      <br />
      <List>{skillsList}</List>
      <br />
      <br />
      <SectionDivider />
      <br />
      <br />
    </Section>
  );
};

export default Technologies;
