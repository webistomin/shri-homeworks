import React, { Component } from 'react';
import './popup.sass';

export default class RepositoryPopup extends Component {
  render() {
    return (
      <div className="popup popup_repository-popup" id="js-repository-select-popup">
        <div className="popup__inner">
          <ul className="popup__list list">
            <li className="popup__item list-item">
              <a className="popup__name title link" href="#">Arc</a>
            </li>
            <li className="popup__item list-item">
              <a className="popup__name title link" href="#">My repository</a>
            </li>
            <li className="popup__item list-item">
              <a className="popup__name title link" href="#">Devtools-team repository</a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
