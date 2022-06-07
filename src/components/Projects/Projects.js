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

const Projects = ({ content }) => {
  const renderedProjectCards = content.projectCards.map(({ fields, sys }) => {
    return (
      <BlogCard key={sys.id} className='project-card'>
        <Img src={fields.image.fields.file.url} />
        <br />
        <br />
        <TitleContent>
          <HeaderThree title={fields.title}>{fields.title}</HeaderThree>
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
    );
  });

  return (
    <Section id='projects'>
      <br />
      <SectionDivider />
      <br />
      <SectionTitle main>{content.title}</SectionTitle>
      <GridContainer>{renderedProjectCards}</GridContainer>
      <br />
      <br />
      <SectionDivider />
      <br />
      <br />
    </Section>
  );
};

export default Projects;
