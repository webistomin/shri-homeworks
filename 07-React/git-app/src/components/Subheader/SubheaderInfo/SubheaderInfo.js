import React from 'react';
import Name from '../../Name';
import {Link} from 'react-router-dom';

const SubheaderInfo = React.memo(({lastCommit, currentRepo}) => {
  const commitLink = `/api/repos/${currentRepo}/commits/${lastCommit.short_commit}`;
  
  return (
    <div className="subheader__row">
      <p className="subheader__info text text_size_l paragraph">
        Last commit
        &nbsp;
        <Link
          to={commitLink}
          className="subheader__link link link_color_blue text text_size_xs link_hover_underline"
          href="#">{lastCommit.short_commit}</Link> on&nbsp;
        <span
          className="subheader__link link link_color_blue">
          <time
            className="subheader__time">
            {new Date(lastCommit.date).toUTCString()}
          </time>
        </span> by&nbsp;
        <Name className="subheader__name" name={lastCommit.author}/>
      </p>
    </div>
  )
});

export default SubheaderInfo;
