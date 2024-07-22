import React from 'react';
import CustomNavbar from '../components/Navbar';
import Hero from '../components/Hero';
import Partners from '../components/partners';
import Component from '../components/Services';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import TalentZone from '../components/TalentZone';
import Contact from '../components/Contact';
import About from '../components/About';
import AnimatedBentoGrid from '../components/bentogrid';

const Home = () => {
  return (
    <div id='Home'>
      <CustomNavbar />
      <Hero />
      <About />
      <Partners />
      <Component />
      <Testimonials />
      <AnimatedBentoGrid />
      <TalentZone />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
