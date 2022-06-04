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
    projects: null,
    projectSection: null,
  };

  async componentDidMount() {
    try {
      const content = await client.getEntries({
        content_type: 'portfolioHome',
      });
      const projectContent = await client.getEntries({
        content_type: 'portfolioProjectCard',
      });
      const projectSection = await client.getEntries({
        content_type: 'portfolioProjects',
      });
      this.setState({
        content: content.items[0].fields,
        projects: projectContent.items,
        // TODO: Change to specific entry IDs in contentful rather than first index (in case of multiple versions)
        projectSection: projectSection.items[0].fields,
      });
    } catch (error) {
      console.log(error);
    }
  }

  renderProjectSection() {
    if (this.state.projectSection === null) return;
    return (
      <Projects
        content={this.state.projectSection}
        projects={this.state.projects}
      />
    );
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
        <Technologies />
        <About />
        <Contact />
      </Layout>
    );
  }
}

export default Home;
