import React from 'react';
import './Breadcrumbs.sass';
import {Link} from 'react-router-dom';

const Breadcrumbs = (props) => {
  
  const { breadcrumbs, currentRepo } = props;
  
  const result = [];
  const baseRoute = `/api/repos/${currentRepo}/tree/master/`;
  
  breadcrumbs.forEach((item, index) => {
    const str = breadcrumbs.slice(0, index+1).join('/');
    result.push({
      label: item,
      link: str,
    })
  });
  
  const items = result.map((item) => {
    
    return (
      <li className="breadcrumbs__item list-item" key={item.link}>
        <Link to={`${baseRoute}${item.link}`} className="breadcrumbs__link link text text_size_l">{item.label}</Link>
      </li>
    );
  });
  
  return (
    <ul className="breadcrumbs list list">
      <li className="breadcrumbs__item list-item" key={baseRoute}>
        <Link to='/' className="breadcrumbs__link link text text_size_l">{currentRepo}</Link>
      </li>
      {items}
    </ul>
  );
  
};

export default Breadcrumbs;
