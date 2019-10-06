import React from 'react';
import './Breadcrumbs.sass';
import {Link} from 'react-router-dom';

const Breadcrumbs = (props) => {
  
  const { breadcrumbs } = props;
  
  const items = breadcrumbs.map((item) => {
    
    // const { id, link, label } = item;
    
    // const link = `/api/repos/alena/tree/master/${item}`
    
    return (
      <li className="breadcrumbs__item list-item" key={item}>
        <Link to={item} className="breadcrumbs__link link text text_size_l">{item}</Link>
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
