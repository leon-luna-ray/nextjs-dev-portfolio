import React from 'react';

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
import { client } from './api/client';
import parse from 'html-react-parser';

export const getStaticProps = async () => {
  const content = await client.getEntry(
    process.env.NEXT_PUBLIC_SECTION_ID_HOME
  );
  const projectSection = await client.getEntry(
    process.env.NEXT_PUBLIC_SECTION_ID_PROJECTS
  );
  const techSection = await client.getEntry(
    process.env.NEXT_PUBLIC_SECTION_ID_TECH
  );
  const aboutSection = await client.getEntry(
    process.env.NEXT_PUBLIC_SECTION_ID_ABOUT
  );
  const contactSection = await client.getEntry(
    process.env.NEXT_PUBLIC_SECTION_ID_CONTACT
  );

  return {
    props: {
      content,
      projectSection,
      techSection,
      aboutSection,
      contactSection,
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
}) => {
  const parseHTML = (string) => {
    return parse(string);
  };

  const renderProjectSection = () => {
    if (projectSection) return <Projects content={projectSection} />;
  };

  const renderTechSection = () => {
    if (techSection) return <Technologies content={techSection} />;
  };
  const renderAboutSection = () => {
    if (aboutSection)
      return <About content={aboutSection} parseHTML={parseHTML} />;
  };

  const renderContactSection = () => {
    if (contactSection) return <Contact content={contactSection} />;
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
      {/* TODO add skip to main content */}
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
