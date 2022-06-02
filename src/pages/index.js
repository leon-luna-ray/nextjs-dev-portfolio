import React, { Component } from 'react';
import axios from 'axios';
import Contact from '../components/Contact/Contact';
import BgAnimation from '../components/BackgroundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import About from '../components/About/About';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import { render } from 'react-dom';
import { client } from './api/client';

class Home extends React.Component {
  state = {
    content: null,
  };

  async componentDidMount() {
    try {
      const content = await client.getEntries({
        content_type: 'portfolioHomePage',
      });
      console.log(content.items);
      this.setState({
        content: content.items,
      });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <Layout>
        <Section grid>
          <Hero />
          <BgAnimation />
        </Section>
        <Projects />
        <Technologies />
        <About />
        <Contact />
      </Layout>
    );
  }
}

export default Home;
