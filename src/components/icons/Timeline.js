import * as React from "react";

const SvgTimeline = (props) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5a2 2 0 0 0-2-2Zm0 16H5V7h14v12Zm-2-7H7v-2h10v2Zm-4 4H7v-2h6v2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgTimeline;
