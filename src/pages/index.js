import React from "react";
import {
  fetchProfile,
  fetchFeaturedProjects,
  fetchSkills,
  fetchGlobal,
} from "./api/sanity";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Contact from "../components/Contact/Contact";
import BgAnimation from "../components/BackgroundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import About from "../components/About/About";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";

export const getStaticProps = async () => {
  const global = await fetchGlobal();
  const profile = await fetchProfile();
  const projects = await fetchFeaturedProjects();
  const skills = await fetchSkills();

  return {
    props: {
      global,
      profile,
      projects,
      skills,
    },
  };
};

const Home = ({ global, profile, projects, skills }) => {
  const renderProjectSection = () => {
    if (projects) return <Projects projects={projects} />;
  };

  const renderTechSection = () => {
    if (skills) return <Technologies skills={skills} />;
  };
  const renderAboutSection = () => {
    if (profile) return <About profile={profile} />;
  };

  const renderContactSection = () => {
    if (profile) return <Contact profile={profile} />;
  };

  return (
    <Layout>
      <nav>
        <Header profile={profile} />
      </nav>
      <main>
        <Section grid>
          <Hero
            name={profile.name}
            title={profile.title}
            intro={global.intro}
          />
          <BgAnimation />
        </Section>
        {renderProjectSection()}
        {renderTechSection()}
        {renderAboutSection()}
        {renderContactSection()}
      </main>
      <footer>
        <Footer name={profile?.name} />
      </footer>
    </Layout>
  );
};

export default Home;
