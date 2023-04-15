import React from 'react';
import { getImageUrl } from '../../pages/api/sanity';

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from './ProjectsStyles';
import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents';

const Projects = ({ projects }) => {
  const getThumbnailUrl = (image) => {
    return getImageUrl(image).size(400, 400).url();
  }

  const mapProjectCards = projects.map(project => {
    return (
      <BlogCard key={project._id} className='project-card'>
        <Img src={getThumbnailUrl(project.mainImage)} />
        <br />
        <br />
        <TitleContent>
          <HeaderThree title={project.title}>{project.title}</HeaderThree>
          <Hr />
        </TitleContent>
        <CardInfo>{project.description[0].children[0].text}</CardInfo>
        <br />
        <div>
          {project.technologies.length ? (
            <div>
              <TitleContent>Technologies</TitleContent>
              <TagList>
                {project.technologies.map((item) => (
                  <Tag key={item._id}>{item.title}</Tag>
                ))}
              </TagList>
            </div>
          ) : (
            ''
          )}
        </div>
        <UtilityList>
          <ExternalLinks href={project.url} target='_blank'>
            🚀 Launch
          </ExternalLinks>
          {project.repository ? (
            <ExternalLinks href={project.repository} target='_blank'>
              Code
            </ExternalLinks>
          ) : (
            ''
          )}
        </UtilityList>
      </BlogCard>
    );
  });

  return (
    <Section id='projects'>
      <br />
      <SectionDivider />
      <br />
      <SectionTitle main>Projects</SectionTitle>
      <GridContainer>{mapProjectCards}</GridContainer>
      <br />
      <br />
      <SectionDivider />
      <br />
      <br />
    </Section>
  );
};

export default Projects;
