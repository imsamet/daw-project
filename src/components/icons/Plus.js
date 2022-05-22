import * as React from "react";

const SvgPlus = (props) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12 4v16m-8-8h16" stroke="currentColor" strokeWidth={2} />
  </svg>
);

export default SvgPlus;
