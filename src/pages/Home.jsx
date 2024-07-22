import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import CustomNavbar from '../components/Navbar';
import Hero from '../components/Hero';
import Partners from '../components/partners';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import TalentZone from '../components/TalentZone';
import Contact from '../components/Contact';
import About from '../components/About';
import AnimatedBentoGrid from '../components/bentogrid';

const Home = () => {
  const controls = useAnimation();

  const handleScroll = async (id) => {
    const element = document.getElementById(id);
    if (element) {
      await controls.start({ y: -element.offsetTop, transition: { duration: 0.8, ease: "easeInOut" } });
    }
  };

  return (
    <motion.div id='Home' animate={controls} initial={{ y: 0 }}>
      <CustomNavbar handleScroll={handleScroll} />
      <Hero handleScroll={handleScroll} />
      <About handleScroll={handleScroll} />
      <Partners handleScroll={handleScroll} />
      <Services handleScroll={handleScroll} />
      <Testimonials handleScroll={handleScroll} />
      <AnimatedBentoGrid handleScroll={handleScroll} />
      <TalentZone handleScroll={handleScroll} />
      <Contact handleScroll={handleScroll} />
      <Footer handleScroll={handleScroll} />
    </motion.div>
  );
};

export default Home;
