import React from 'react';
import Name from '../../Name';

const SubheaderInfo = React.memo(({lastCommit}) => {
  return (
    <div className="subheader__row">
      <p className="subheader__info text text_size_l paragraph">
        Last commit
        &nbsp;
        <a
          className="subheader__link link link_color_blue text text_size_xs link_hover_underline"
          href="#">{lastCommit.short_commit}</a> on&nbsp;
        <a
          className="subheader__link link link_color_blue link_hover_underline"
          href="#">
          <time
            className="subheader__time">
            {new Date(lastCommit.date).toUTCString()}
          </time>
        </a> by&nbsp;
        <Name className="subheader__name" name={lastCommit.author}/>
      </p>
    </div>
  )
});

export default SubheaderInfo;
