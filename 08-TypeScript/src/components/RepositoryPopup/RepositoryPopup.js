import React, { Component } from 'react';
import './popup.sass';
import { detectMob } from '../../plugins/isMobile.ts';

export default class RepositoryPopup extends Component {
  
  render() {
    const { repos, isVisible } = this.props;
  
    const isPopupVisible = isVisible ? 'popup_visible' : '';
    
    const items = repos.map((item) => {
      
      const activeClass = item === this.props.currentRepo ? 'popup__name_active' : '';
      
      return (
        <li className="popup__item list-item" key={item}>
          <button
            type="button"
            onClick={() => {
              this.props.onRepoSelected(item)
            }}
            className={`popup__name btn title link ${activeClass}`}>
            {item}
          </button>
        </li>
      );
    });
    
    const closePopup = () => {
      if (detectMob()) {
        this.props.onPopupClicked()
      }
    };
    
    return (
      <div
        className={`popup popup_repository-popup ${isPopupVisible}`}
        id="js-repository-select-popup"
        onClick={closePopup}
      >
        <div className="popup__inner">
          <ul className="popup__list list">
            {items}
          </ul>
        </div>
      </div>
    )
  }
}
