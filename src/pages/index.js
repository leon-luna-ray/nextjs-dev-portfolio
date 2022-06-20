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

// Todo Skip to main content
class Home extends React.Component {
  state = {
    content: null,
    projectSection: null,
    techSection: null,
    aboutSection: null,
    contactSection: null,
  };

  async componentDidMount() {
    try {
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
      this.setState({
        content: content.fields,
        projectSection: projectSection.fields,
        techSection: techSection.fields,
        aboutSection: aboutSection.fields,
        contactSection: contactSection.fields,
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

  renderContactSection() {
    if (this.state.contactSection === null) return;
    return <Contact content={this.state.contactSection} />;
  }

  render() {
    if (this.state.content === null) {
      // TODO Find different solution if content n/a with next js (SSR?)

      return '';
    }
    return (
      <Layout>
        <nav>
          <Header
            name={this.state.content.developerName.fields.name}
            projects={this.state.projectSection}
            technologies={this.state.techSection}
            about={this.state.aboutSection}
            contact={this.state.contactSection}
          />
        </nav>
        {/* TODO add skip to main content */}
        <main>
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
          {this.renderContactSection()}
        </main>
        <footer>
          <Footer name={this.state.content.developerName.fields.name} />
        </footer>
      </Layout>
    );
  }
}

export default Home;
