import * as React from "react";

const SvgPiano = (props) => (
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
      d="M3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2Zm2 2h6v12H5v-2.5h4v-2H5v-3h4v-2H5V7Zm14 0h-7v12h7V7Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgPiano;
