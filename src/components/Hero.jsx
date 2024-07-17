import React from 'react';
import { Button } from '@nextui-org/react';

const Hero = () => {
  return (
    <div className="hero-section bg-white text-black h-screen flex items-center relative overflow-hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlnsSvgjs="http://svgjs.dev/svgjs"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1440 560"
        className="absolute top-0 left-0 z-0"
      >
        <g mask="url(&quot;#SvgjsMask1030&quot;)" fill="none">
          <path
            d="M639.64 340.26 a117.52 117.52 0 1 0 235.04 0 a117.52 117.52 0 1 0 -235.04 0z"
            fill="rgba(148, 164, 255, 1)"
            className="triangle-float3"
          ></path>
          <path
            d="M299.94 88.53 a137.73 137.73 0 1 0 275.46 0 a137.73 137.73 0 1 0 -275.46 0z"
            fill="rgba(148, 164, 255, 1)"
            className="triangle-float3"
          ></path>
          <path
            d="M1046.13 449.47 a148.48 148.48 0 1 0 296.96 0 a148.48 148.48 0 1 0 -296.96 0z"
            fill="rgba(148, 164, 255, 1)"
            className="triangle-float3"
          ></path>
          <path
            d="M-159.14 86.45 a166.6 166.6 0 1 0 333.2 0 a166.6 166.6 0 1 0 -333.2 0z"
            fill="rgba(148, 164, 255, 1)"
            className="triangle-float3"
          ></path>
          <path
            d="M1067.82 19.77 a142.71 142.71 0 1 0 285.42 0 a142.71 142.71 0 1 0 -285.42 0z"
            fill="rgba(148, 164, 255, 1)"
            className="triangle-float1"
          ></path>
        </g>
        <defs>
          <mask id="SvgjsMask1030">
            <rect width="1440" height="560" fill="#ffffff"></rect>
          </mask>
        </defs>
      </svg>
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4 relative z-10">
        <div className="md:w-1/2 flex flex-col items-start text-left space-y-4">
          <h1 className="text-6xl md:text-7xl font-bold leading-tight font-poppins">
            Great <span className="bg-gradient-to-r from-fuchsia-500 to-pink-500 bg-clip-text text-transparent">Products</span> are built by<br /> Great{' '}
            <span className="bg-gradient-to-r from-fuchsia-500 to-pink-500 bg-clip-text text-transparent">Teams</span>
          </h1>
          <p className="text-lg md:text-xl">
            We help build and manage a team of world-class developers to bring your vision to life.
          </p>
          <Button
            as="a"
            href="#"
            color="primary"
            className="font-bold rounded-lg text-lg w-48 h-16 bg-[#1065f0] text-[#ffffff] justify-center"
          >
            Let's Get Started!
          </Button>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img src="/public/web.png" alt="Hero" className="w-full h-96 object-cover" />
        </div>
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
