import React from 'react';
import Contact from '../components/Contact/Contact';
import BgAnimation from '../components/BackgroundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import About from '../components/About/About';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import { client } from './api/client';

class Home extends React.Component {
  state = {
    content: null,
    projectSection: null,
    techSection: null,
  };

  async componentDidMount() {
    try {
      const content = await client.getEntries({
        content_type: 'portfolioHome',
      });
      const projectSection = await client.getEntry(
        process.env.NEXT_PUBLIC_SECTION_ID_PROJECTS
      );
      const techSection = await client.getEntry(
        process.env.NEXT_PUBLIC_SECTION_ID_TECH
      );
      this.setState({
        content: content.items[0].fields,
        projectSection: projectSection.fields,
        techSection: techSection.fields,
      });
    } catch (error) {
      console.log(error);
    }
  }

  renderProjectSection() {
    if (this.state.projectSection === null) return;
    return <Projects content={this.state.projectSection} />;
  }

  renderTechSection() {
    if (this.state.techSection === null) return;
    return <Technologies content={this.state.techSection} />;
  }

  render() {
    if (this.state.content === null) {
      // TODO Find different solution if content n/a with next js (SSR?)
      return <h1>Loading</h1>;
    }
    return (
      <Layout>
        <Section grid>
          <Hero
            name={this.state.content.developerName.fields.name}
            title={this.state.content.pageTitle}
            intro={this.state.content.pageIntro}
          />
          <BgAnimation />
        </Section>
        {this.renderProjectSection()}
        {this.renderTechSection()}
        <About />
        <Contact />
      </Layout>
    );
  }
}

export default Home;
