import * as React from "react";

const SvgMagnetic = (props) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 12.5v-1C4 7.634 7.134 4 11 4h4v4h-3a4 4 0 1 0 0 8h3v4h-4c-3.866 0-7-3.634-7-7.5ZM17 20h1a2 2 0 1 0 0-4h-1v4Zm1-12h-1V4h1a2 2 0 1 1 0 4Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgMagnetic;
