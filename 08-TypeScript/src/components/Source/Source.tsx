import React from 'react';
import {Link} from 'react-router-dom';
import './Source.sass';
import sprite from '../../layout/img/icons/sprite.svg';
import SourceHeading from '../SourceHeading';
import {getFileExtension} from '../../plugins/getFileExtension';

export interface SourceProps {
  files: Array<string>;
  currentRepo: string;
}

const Source: React.FC<SourceProps> = (props) => {

  const headingLinks = [
    {
      id: 1,
      link: '/',
      label: 'Files',
      isActive: true,
    },
    // {
    //   id: 2,
    //   link: '/',
    //   label: 'Branches'
    // },
  ];

  const {files, currentRepo} = props;

  const items = files.map((item) => {
    const fileName = item.substring(item.lastIndexOf('/') +1 );

    let linkUrl = `/api/repos/${currentRepo}/tree/master/${item}`;
    let icon = null;
    const hasExtension = getFileExtension(item);

    if (hasExtension || item[0] === '.') {
      icon = {
        width: '12',
        height: '15',
        name: 'icon-file',
      };
      linkUrl = `/api/repos/${currentRepo}/blob/master/${item}`;
    } else {
      icon = {
        width: '12',
        height: '9',
        name: 'icon-folder',
      };
      linkUrl = `/api/repos/${currentRepo}/tree/master/${item}/`;
    }

    return (
      <li className="source__files-item list-item" key={item} title={fileName}>
        <Link className="source__files-name link" to={linkUrl}>
          <svg className="source__table-icon source__table-icon_left icon" role="img" width={icon.width}
               height={icon.height}>
            <use xlinkHref={`${sprite}#${icon.name}`}/>
          </svg>
          {fileName}
        </Link>
      </li>
    );
  });

  return (
    <section className="source">
      <div className="source__container container">
        <SourceHeading links={headingLinks}/>
        <ul className="source__files-list list">
          {items}
        </ul>
      </div>
    </section>
  );
};

export default Source;
