import React from 'react';
import './Name.sass';

const Name = (props) => {
  return (
    <span className={`name name_first-letter name_first-letter_red ${props.className}`}>
      {props.name}
    </span>
  );
};

export default Name;
