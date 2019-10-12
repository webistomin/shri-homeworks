import React from 'react';
import './Breadcrumbs.sass';
import {Link} from 'react-router-dom';

export interface BreadcrumbsProps {
  currentRepo: string;
  breadcrumbs: Array<string>,
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = (props) => {

  const { breadcrumbs, currentRepo } = props;

  const result: { label: string; link: string; }[] = [];
  const baseRoute: string = `/api/repos/${currentRepo}/tree/master/`;

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
