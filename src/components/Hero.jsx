import React from 'react';
import { Button } from '@nextui-org/react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import SVGContainer from './icons/SVGContainer.jsx'; // Import the SVGContainer component

const Hero = () => {
  return (
    <div className="hero-section bg-white text-black h-screen flex items-center relative overflow-hidden pt-16 md:pt-24">
      <SVGContainer />
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4 relative z-10">
        <motion.div
          className="md:w-1/2 flex flex-col items-start text-left space-y-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-7xl font-bold leading-tight font-poppins">
            Great <span className="bg-gradient-to-r from-fuchsia-500 to-pink-500 bg-clip-text text-transparent">Products</span><br /> are built by<br /> Great{' '}
            <span className="bg-gradient-to-r from-fuchsia-500 to-pink-500 bg-clip-text text-transparent">Teams</span>
          </h1>
          <p className="text-lg md:text-xl">
            We help build and manage a team of world-class developers to bring your vision to life.
          </p>
          <Link to="contact" smooth={true} duration={500}>
            <Button
              as="a"
              href="#"
              color="primary"
              className="font-bold rounded-lg text-lg w-48 h-16 bg-[#1065f0] text-[#ffffff] justify-center"
            >
              Get a Quote
            </Button>
          </Link>
        </motion.div>
        <motion.div
          className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img src="/web.png" alt="Hero" className="w-full h-96 object-cover" />
        </motion.div>
      </div>
      <style jsx>{`
        .text-gradient {
          background: linear-gradient(to right, #b19cd9, #d1c4e9);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        @keyframes float1 {
          0% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-10px, 0);
          }
          100% {
            transform: translate(0, 0);
          }
        }
        .triangle-float1 {
          animation: float1 5s infinite;
        }
        @keyframes float2 {
          0% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-5px, -5px);
          }
          100% {
            transform: translate(0, 0);
          }
        }
        .triangle-float2 {
          animation: float2 4s infinite;
        }
        @keyframes float3 {
          0% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(0, -10px);
          }
          100% {
            transform: translate(0, 0);
          }
        }
        .triangle-float3 {
          animation: float3 6s infinite;
        }
        .font-poppins {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>
    </div>
  );
};

export default Hero;
