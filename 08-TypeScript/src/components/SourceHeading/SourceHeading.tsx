import React from 'react';
import '../Tab/Tab.sass'

interface Links {
  id: number;
  link: string;
  label: string;
  isActive: boolean;
}

export interface SourceHeadingProps {
  links: Array<Links>;
}

const SourceHeading: React.FC<SourceHeadingProps> = (props) => {
  const { links } = props;

  const items = links.map((item) => {

    const { id, link, label, isActive } = item;

    return (
      <li className="source__tab-item list-item" key={id}>
        <a className="source__tab tab tab_text_uppercase tab_color_grey text text_size_m link" href={link}>
          <span className={`tab__name tab__name_space_s ${isActive ? 'tab__name_current' : ''}`}>{label}</span>
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
