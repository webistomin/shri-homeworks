import React from 'react';
import './Subheader.sass';
import './Select.sass';
import sprite from '../../layout/img/icons/sprite.svg';
import Breadcrumbs from '../Breadcrumbs';

const Subheader = (props) => {
  
  const breadcrumbs = [
    {
      id: 1,
      link: '/',
      label: 'arcadia'
    },
    {
      id: 2,
      link: '/',
      label: 'arcadia'
    }
  ];
  
  return (
    <div className="subheader">
      <div className="subheader__container container">
        <div className="subheader__heading">
          <Breadcrumbs breadcrumbs={breadcrumbs}/>
        </div>
        <div className="subheader__current">
          <div className="subheader__row subheader__row_margin-bottom">
            <h1 className="subheader__title title text text_size_xl">arcadia</h1>
            <div className="subheader__dropdown">
              <button className="subheader__select select select_icon_dropdown select_color_grey text text_size_xl btn" type="button" id="js-branch-select-btn">trunk
                <svg className="select__icon select__icon_right icon" role="img" width={10} height={8}>
                  <use xlinkHref={`${sprite}#icon-dropdown`} />
                </svg>
              </button>
            </div>
          </div>
          <div className="subheader__row">
            <p className="subheader__info text text_size_l paragraph">
              Last commit
              &nbsp;
              <a
                className="subheader__link link link_color_blue text text_size_xs link_hover_underline"
                href="#">r3248813</a> on&nbsp;
              <a
                className="subheader__link link link_color_blue link_hover_underline"
                href="#">
                <time
                  className="subheader__time">
                  20 Oct 2017, 12:24
                </time>
              </a> by&nbsp;
              <span className="subheader__name name name_first-letter name_first-letter_red">
                robot-srch-releaser
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Subheader;
