import React from 'react';

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
  // TODO Find a way to re-order projects
  // Error handling
  if (!projects) {
    return '';
  }
  return (
    <Section id='projects'>
      <br />
      <SectionDivider />
      <br />
      <SectionTitle main>Projects</SectionTitle>
      <GridContainer>
        {projects.map(({ fields, sys }) => (
          <BlogCard key={sys.id} className='project-card'>
            <Img src={fields.image.fields.file.url} />
            <br />
            <br />
            <TitleContent>
              <HeaderThree title>{fields.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo>{fields.description}</CardInfo>
            <br />
            <div>
              {fields.technologies ? (
                <div>
                  <TitleContent>Technologies</TitleContent>
                  <TagList>
                    {fields.technologies.map((tag, i) => (
                      <Tag key={i}>{tag}</Tag>
                    ))}
                  </TagList>
                </div>
              ) : (
                ''
              )}
            </div>
            <UtilityList>
              <ExternalLinks href={fields.projectUrl} target='_blank'>
                🚀 Launch
              </ExternalLinks>
              {fields.repositoryUrl ? (
                <ExternalLinks href={fields.repositoryUrl} target='_blank'>
                  Code
                </ExternalLinks>
              ) : (
                ''
              )}
            </UtilityList>
          </BlogCard>
        ))}
      </GridContainer>
      <br />
      <br />
      <SectionDivider />
      <br />
      <br />
    </Section>
  );
};

export default Projects;
