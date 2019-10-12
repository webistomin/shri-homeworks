import React, { Component } from 'react';
import './popup.sass';
import { detectMob } from '../../plugins/isMobile';

export interface RepositoryPopupProps {
  repos: Array<string>;
  isVisible: boolean;
  currentRepo: string;
  onRepoSelected: (item: string) => void;
  onPopupClicked: () => void;
}

export default class RepositoryPopup extends Component<RepositoryPopupProps> {

  render() {
    const { repos, isVisible, currentRepo, onRepoSelected, onPopupClicked } = this.props;

    const isPopupVisible = isVisible ? 'popup_visible' : '';

    const items = repos.map((item) => {

      const activeClass = item === currentRepo ? 'popup__name_active' : '';

      return (
        <li className="popup__item list-item" key={item}>
          <button
            type="button"
            onClick={() => {
              onRepoSelected(item)
            }}
            className={`popup__name btn title link ${activeClass}`}>
            {item}
          </button>
        </li>
      );
    });

    const closePopup = () => {
      if (detectMob()) {
        onPopupClicked()
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
