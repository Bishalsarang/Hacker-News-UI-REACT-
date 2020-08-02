import React from 'react';
import loader from '../../../assets/images/loader.svg';
import './style.css';

const Loader = props => {
  return (
    <div
      // className="loader"
      // style={{ width: props.width, height: props.height }}
      style={{ textAlign: 'center' }}
    >
      <img src={loader} alt="Loading" style={props.style}></img>
    </div>
  );
};

export default Loader;
