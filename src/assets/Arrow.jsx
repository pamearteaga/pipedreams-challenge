import React from "react";

const Arrow = ({color, direction}) => {
  return (
    <>
      <svg
        width="13"
        height="23"
        viewBox="0 0 17 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.24685 0.03125L0.081543 3.19656L10.3632 13.5006L0.081543 23.8047L3.24685 26.97L16.7162 13.5006L3.24685 0.03125Z"
          fill={color}
        />
      </svg>
    </>
  );
};

export default Arrow;
