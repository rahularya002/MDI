import React from 'react';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';

const TeamMembers = [
  {
    name: 'John Doe',
    role: 'Lead Web Developer',
    description: 'John is our seasoned lead developer with over 10 years of experience in building high-performing web applications.',
    avatar: '/dev1.jpg',
    initials: 'JD',
  },
  {
    name: 'Jane Smith',
    role: 'UI/UX Designer',
    description: 'Jane is our talented designer who creates visually stunning and user-friendly interfaces.',
    avatar: '/dev2.jpg',
    initials: 'JS',
  },
  {
    name: 'Michael Johnson',
    role: 'Project Manager',
    description: 'Michael is our experienced project manager who ensures seamless coordination and timely delivery of our projects.',
    avatar: '/dev1.jpg',
    initials: 'MJ',
  },
  {
    name: 'Emily Davis',
    role: 'Front-end Developer',
    description: 'Emily is our front-end specialist who crafts visually stunning and responsive user interfaces.',
    avatar: '/dev2.jpg',
    initials: 'ED',
  },
];

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
        <div className="container mx-auto px-4 md:px-6 space-y-10 xl:space-y-16">
          <div className="grid gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="leading-tighter text-3xl md:text-5xl xl:text-6xl font-bold tracking-tighter">
                Welcome to MD InfoSystems
              </h1>
              <p className="mx-auto max-w-3xl text-gray-600 md:text-xl">
                At our web development company, we are passionate about creating innovative and user-centric digital
                solutions that help our clients achieve their business goals. Our mission is to empower businesses of
                all sizes with the tools and expertise they need to thrive in the digital landscape.
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col items-start space-y-4"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block rounded-lg bg-gradient-to-r from-violet-500 to-purple-500 px-3 py-2 text-sm text-white">Our Values</div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckIcon className="h-5 w-5 text-primary" />
                  <span>Deliver exceptional quality</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="h-5 w-5 text-primary" />
                  <span>Embrace innovation and creativity</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="h-5 w-5 text-primary" />
                  <span>Foster a collaborative work environment</span>
                </li>
                <li className="flex items-start gap-2">
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
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default About;
