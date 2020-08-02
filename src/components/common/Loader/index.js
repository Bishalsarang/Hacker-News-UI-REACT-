import React from 'react';

import './style.css';

const Loader = props => {
  return (
    <div
      className="loader"
      style={{ width: props.width, height: props.height }}
    ></div>
  );
};

export default Loader;
