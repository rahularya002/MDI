import React from 'react';
import TriangleFloat from './TriangleFloat';
import Mask from './Mask';

const SVGContainer = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 1440 560"
      className="absolute top-0 left-0 z-0"
    >
      <defs>
        <mask id="SvgjsMask1030">
          <rect width="1440" height="560" fill="#ffffff"></rect>
        </mask>
      </defs>
      <g mask="url(#SvgjsMask1030)" fill="none">
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
    </svg>
  );
};

export default SVGContainer;
