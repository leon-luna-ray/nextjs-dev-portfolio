import React from 'react';
import parse from 'html-react-parser';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Contact from '../components/Contact/Contact';
import BgAnimation from '../components/BackgroundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import About from '../components/About/About';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

import { contentfulClient } from './api/client';
import { fetchProfile, fetchFeaturedProjects, fetchSkills } from './api/sanity';


export const getStaticProps = async () => {
  const content = await contentfulClient.getEntry(
    process.env.NEXT_PUBLIC_SECTION_ID_HOME
  );
  const projectSection = await contentfulClient.getEntry(
    process.env.NEXT_PUBLIC_SECTION_ID_PROJECTS
  );
  const techSection = await contentfulClient.getEntry(
    process.env.NEXT_PUBLIC_SECTION_ID_TECH
  );
  const aboutSection = await contentfulClient.getEntry(
    process.env.NEXT_PUBLIC_SECTION_ID_ABOUT
  );
  const contactSection = await contentfulClient.getEntry(
    process.env.NEXT_PUBLIC_SECTION_ID_CONTACT
  );

  const profile = await fetchProfile();
  const projects = await fetchFeaturedProjects();
  const skills = await fetchSkills();

  return {
    props: {
      content,
      projectSection,
      techSection,
      aboutSection,
      contactSection,
      profile,
      projects,
      skills,
    },
  };
};

// Todo Skip to main content
const Home = ({
  content,
  projectSection,
  techSection,
  aboutSection,
  contactSection,
  profile,
  projects,
  skills,
}) => {
  const renderProjectSection = () => {
    if (projects) return <Projects projects={projects} />;
  };

  const renderTechSection = () => {
    if (skills) return <Technologies skills={skills}/>;
  };
  const renderAboutSection = () => {
    if (profile) return <About profile={profile}/>;
  };

  const renderContactSection = () => {
    if (profile) return <Contact profile={profile} />;
  };

  return (
    <Layout>
      <nav>
        <Header
          name={content.fields.developerName.fields.name}
          projects={projectSection}
          technologies={techSection}
          about={aboutSection}
          contact={contactSection}
        />
      </nav>
      <main>
        <Section grid>
          <Hero
            name={content.fields.developerName.fields.name}
            title={content.fields.pageTitle}
            intro={content.fields.pageIntro}
          />
          <BgAnimation />
        </Section>
        {renderProjectSection()}
        {renderTechSection()}
        {renderAboutSection()}
        {renderContactSection()}
      </main>
      <footer>
        <Footer name={content.fields.developerName.fields.name} />
      </footer>
    </Layout>
  );
};

export default Home;
