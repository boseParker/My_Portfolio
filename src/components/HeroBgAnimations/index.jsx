import React from 'react';
import { Div } from './HeroBgAnimtaionsStyles';

const HeroBgAnimations = () => (
  <Div>
    <svg
      className="BgAnimation__svg"
      viewBox="0 0 602 602"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      {/* Gradient Definitions */}
      <defs>
        <linearGradient id="paint11_linear" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#13ADC7" />
          <stop offset="1" stopColor="#13ADC7" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Circle Element */}
      <circle cx="170" cy="198" r="0" fill="currentColor">
        <animate
          attributeName="r"
          values="0;150;0"
          dur="5s"
          repeatCount="indefinite"
          keyTimes="0;0.5;1"
        />
      </circle>

      {/* Ellipse Animation */}
      <ellipse cx="0" cy="0" rx="5" ry="5" fill="red">
        <animateMotion dur="5s" repeatCount="indefinite" rotate="auto">
          {/* Define a path for motion animation */}
          <mpath xlinkHref="#motionPath" />
        </animateMotion>
      </ellipse>

      {/* Path with Gradient Stroke */}
      <path
        d="M476.171 362.952L450.417 337.168"
        stroke="url(#paint11_linear)"
        strokeWidth="3"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="1000"
          to="0"
          dur="3s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  </Div>
);

export default HeroBgAnimations;
