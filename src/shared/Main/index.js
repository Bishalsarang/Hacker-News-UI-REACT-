import React from 'react';

const Main = props => {
  return <main className={`"Main" ${props.className}`}>{props.children}</main>;
};

export default Main;
