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
import parse from 'html-react-parser';

// Todo Skip to main content
class Home extends React.Component {
  state = {
    content: null,
    projectSection: null,
    techSection: null,
    aboutSection: null,
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
      const aboutSection = await client.getEntry(
        process.env.NEXT_PUBLIC_SECTION_ID_ABOUT
      );
      this.setState({
        content: content.items[0].fields,
        projectSection: projectSection.fields,
        techSection: techSection.fields,
        aboutSection: aboutSection.fields,
      });
    } catch (error) {
      console.log(error);
    }
  }

  parseHTML(string) {
    return parse(string);
  }

  renderProjectSection() {
    if (this.state.projectSection === null) return;
    return <Projects content={this.state.projectSection} />;
  }

  renderTechSection() {
    if (this.state.techSection === null) return;
    return <Technologies content={this.state.techSection} />;
  }
  renderAboutSection() {
    if (this.state.aboutSection === null) return;
    return (
      <About content={this.state.aboutSection} parseHTML={this.parseHTML} />
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
        {this.renderTechSection()}
        {this.renderAboutSection()}
        <Contact />
      </Layout>
    );
  }
}

export default Home;
