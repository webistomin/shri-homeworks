import React, { Component } from 'react';

import './Select.sass';
import sprite from '../../layout/img/icons/sprite.svg';

export default class Select extends Component {
  
  state = {
    isOpened: false,
  };
  
  render() {
    return(
      <button
        className={`select select_icon_dropdown select_color_grey text text_size_xl btn ${ this.props.className }`}
        type="button"
        id="js-branch-select-btn"
        onClick={() => {
          this.props.onSelectClicked()
        }}
      >
        master
        <svg className="select__icon select__icon_right icon" role="img" width={10} height={8}>
          <use xlinkHref={`${sprite}#icon-dropdown`} />
        </svg>
      </button>
    )
  }
}
