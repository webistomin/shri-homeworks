import React from 'react';
import './Breadcrumbs.sass';

const Breadcrumbs = (props) => {

  const { breadcrumbs } = props;
  
  const items = breadcrumbs.map((item) => {
    
    const { id, link, label } = item;
    
    return (
      <li className="breadcrumbs__item list-item" key={id}>
        <a href={link} className="breadcrumbs__link link text text_size_l">{label}</a>
      </li>
    );
  });
  
  return (
    <ul className="breadcrumbs list list">
      {items}
    </ul>
  );
  
};

export default Breadcrumbs;
