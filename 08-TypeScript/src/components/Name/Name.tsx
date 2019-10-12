import React from 'react';
import './Name.sass';

export interface NameProps {
  className: string;
  name: string;
}

const Name: React.FC<NameProps> = ((props) => {

  const {className, name} = props;

  return (
    <span className={`name name_first-letter name_first-letter_red ${className}`}>
      {name}
    </span>
  );
});

export default Name;
