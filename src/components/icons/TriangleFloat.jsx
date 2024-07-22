import React from 'react';

const TriangleFloat = ({ className, d }) => {
  return (
    <path
      d={d}
      fill="rgba(148, 164, 255, 1)"
      className={className}
    />
  );
};

export default TriangleFloat;
