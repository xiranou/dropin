import React from "react";
import "./Spinner.scss";

const Spinner = () => (
  <div className="spinner">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="91"
      height="92"
      viewBox="0 0 91 92"
    >
      <g fill="none" fillRule="nonzero">
        <path
          fill="#7CE6D7"
          d="M42.14 69.582l-4.693-39.76-.009-.004a2.221 2.221 0 00-1.302-1.806 2.224 2.224 0 00-2.018.11l-.005-.003-.022.016a2.227 2.227 0 00-.315.229L1.766 51.637v.001a2.23 2.23 0 00.283 3.922l36.987 16.454a2.232 2.232 0 003.103-2.432z"
        />
        <path
          fill="#F7DC69"
          d="M84.803 19.38L49.093 1.016l-.008.005a2.233 2.233 0 00-2.233.069 2.222 2.222 0 00-1.04 1.734l-.006.002.001.027c-.007.13 0 .26.014.39l1.416 39.564c-.013.427.095.862.339 1.251a2.241 2.241 0 003.083.71l34.427-21.455a2.228 2.228 0 00-.283-3.934z"
        />
        <path
          fill="#E684C3"
          d="M89.56 74.898L59.927 48.514l-.01.002a2.164 2.164 0 00-2.143-.47 2.204 2.204 0 00-1.403 1.428l-.005.001-.006.027a2.25 2.25 0 00-.08.38L48.21 88.54h.001c-.114.41-.115.858.025 1.293a2.19 2.19 0 002.767 1.43l37.89-12.487c1.153-.38 1.784-1.637 1.41-2.807a2.216 2.216 0 00-.743-1.071z"
        />
      </g>
    </svg>
  </div>
);

export default Spinner;
