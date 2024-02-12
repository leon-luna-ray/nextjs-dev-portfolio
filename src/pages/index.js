import React from "react";
import {
  fetchHomePage,
} from "./api/sanity";
import {PortableText} from '@portabletext/react'

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
  const data = await fetchHomePage();

  const global = data.global
  const profile = data.profile;;
  const projects = data.projects.projects || [];
  const skills = data.skillsGroups;

  return {
    props: {
      global,
      profile,
      projects,
      skills,
    },
  };
};

const Home = ({ data, global, profile, projects, skills }) => {
  const renderProjectSection = () => {
    if (projects) return (
      <div className="flex-col-1">
        {/* <PortableText value={data?.projects.description} /> */}
        <Projects projects={projects} />
      </div>
    )
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
