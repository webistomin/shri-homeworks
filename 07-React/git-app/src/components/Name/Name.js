import React from 'react';
import './Name.sass';

const Name = React.memo(({className, name}) => {
  return (
    <span className={`name name_first-letter name_first-letter_red ${className}`}>
      {name}
    </span>
  );
});

export default Name;
