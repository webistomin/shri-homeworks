import React from 'react';
import './Source.sass';
import './Name.sass';
import sprite from '../../layout/img/icons/sprite.svg';
import SourceHeading from '../SourceHeading';
import { getFileExtension } from '../../plugins/getFileExtension';

const Source = (props) => {
  
  const headingLinks = [
    {
      id: 1,
      link: '/',
      label: 'Files'
    },
    {
      id: 2,
      link: '/',
      label: 'Branches'
    },
  ];
  
  const { files } = props;
  const items = files.map((item) => {
    
    let icon = null;
    const hasExtension = getFileExtension(item);
    
    if (hasExtension || item[0] === '.') {
      icon = {
        width: '12',
        height: '15',
        name: 'icon-file',
      }
    } else {
      icon = {
        width: '12',
        height: '9',
        name: 'icon-folder',
      }
    }
    
    return (
      <li className="source__files-item source__files-item_hot list-item" key={item} title={item}>
        <a className="source__files-name link" href="/">
          <svg className="source__table-icon source__table-icon_left icon" role="img" width={icon.width} height={icon.height}>
            <use xlinkHref={`${sprite}#${icon.name}`} />
          </svg>
          {item}
        </a>
      </li>
    );
  });
  
  return (
    <section className="source">
      <div className="source__container container">
        <SourceHeading links={headingLinks} />
        <ul className="source__files-list list">
          { items }
        </ul>
      </div>
    </section>
  )
};

export default Source;
