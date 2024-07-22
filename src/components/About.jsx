import React from 'react';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';
import CheckIcon from './icons/CheckIcon.jsx'; // Import the CheckIcon component

const About = () => {
  return (
    <Element name="about">
      <motion.section
        id="About"
        className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-200 to-cyan-200"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 md:px-6 xl:px-8 space-y-10 xl:space-y-16">
          <div className="grid gap-6 md:gap-12 xl:gap-16 px-4 sm:px-6 md:px-10 md:grid-cols-2">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight leading-tight">
                Welcome to MD InfoSystems
              </h1>
              <p className="text-gray-700 md:text-lg xl:text-xl">
                At our web development company, we are passionate about creating innovative and user-centric digital
                solutions that help our clients achieve their business goals. Our mission is to empower businesses of
                all sizes with the tools and expertise they need to thrive in the digital landscape.
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col space-y-6"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block rounded-lg bg-gradient-to-r from-violet-500 to-purple-500 px-3 py-2 text-sm text-white">
                Our Values
              </div>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-center gap-3">
                  <CheckIcon className="h-5 w-5 text-primary" />
                  <span>Deliver exceptional quality</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon className="h-5 w-5 text-primary" />
                  <span>Embrace innovation and creativity</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon className="h-5 w-5 text-primary" />
                  <span>Foster a collaborative work environment</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon className="h-5 w-5 text-primary" />
                  <span>Prioritize client satisfaction</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </Element>
  );
};

export default About;
