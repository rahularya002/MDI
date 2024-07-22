import React from 'react';
import Marquee from 'react-fast-marquee'; // Corrected import name
import { motion } from 'framer-motion';

export default function Partners() {
  const logos = [
    { alt: "Transistor", src: "https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg" },
    { alt: "Reform", src: "https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg" },
    { alt: "Tuple", src: "https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg" },
    { alt: "SavvyCal", src: "https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg" },
    { alt: "Statamic", src: "https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg" },
  ];

  // Duplicate logos to create a seamless scrolling effect
  const doubledLogos = [...logos, ...logos];

  return (
    <motion.div
      className="border-t-2 border-b-2 border-gray-300 bg-white py-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.h2
          className="text-center text-lg font-semibold leading-8 text-gray-900"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Trusted by the world’s most innovative teams
        </motion.h2>
        <Marquee speed={40}>
          {doubledLogos.map((logo, index) => (
            <motion.div
              key={index}
              className="mx-6 my-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <img src={logo.src} alt={logo.alt} className="h-12" />
            </motion.div>
          ))}
        </Marquee>
      </div>
    </motion.div>
  );
}
