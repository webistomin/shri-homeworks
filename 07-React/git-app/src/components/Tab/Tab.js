import React, { Component } from 'react';
import './Tab.sass';
import sprite from '../../layout/img/icons/sprite.svg';

export default class Tab extends Component {
  render() {
    return (
      <button className={`tab btn text text_size_l ${ this.props.className }`} type="button" id="js-repository-select-btn">
        <span className="tab__name tab__name_current tab__name_space_m">
          Repository Arc
        </span>
        <svg className="tab__icon tab__icon_right" role="img" width={10} height={8}>
          <use xlinkHref={`${sprite}#icon-dropdown`} />
        </svg>
      </button>
    )
  }
}
