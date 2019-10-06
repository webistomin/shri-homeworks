import React from 'react';
import '../Tab/Tab.sass'

const SourceHeading = ({ links }) => {
  const items = links.map((item) => {
    
    const { id, link, label } = item;
    
    return (
      <li className="source__tab-item list-item" key={id}>
        <a className="source__tab tab tab_text_uppercase tab_color_grey text text_size_m link" href={link}>
          <span className="tab__name tab__name_space_s">{label}</span>
        </a>
      </li>
    );
  });
  
  return (
    <div className="source__heading">
      <ul className="source__tabs-list list">
        {items}
      </ul>
    </div>
  )
};

export default SourceHeading;
