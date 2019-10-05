import React, { Component } from 'react';
import './popup.sass';
import { detectMob } from '../../plugins/isMobile';



export default class RepositoryPopup extends Component {
  
  render() {
    const { repos, isVisible } = this.props;
  
    const isPopupVisible = isVisible ? 'popup_visible' : '';
    
    const items = repos.map((item) => {
      return (
        <li className="popup__item list-item" key={item}>
          <a className="popup__name title link" href="#">{item}</a>
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
