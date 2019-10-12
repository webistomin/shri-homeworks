import React, { Component } from 'react';
import './popup.sass';
import {detectMob} from '../../plugins/isMobile';

export interface BranchPopupProps {
  branches: Array<string>;
  isVisible: boolean;
  onPopupClicked: () => void;
}

export default class BranchPopup extends Component<BranchPopupProps> {

  render() {
    const { branches, isVisible, onPopupClicked } = this.props;

    const isPopupVisible = isVisible ? 'popup_visible' : '';

    const items = branches.map((item) => {
      return (
        <li className="popup__item popup__item_paddings list-item" key={item}>
          <a className="popup__name title link" href="#">
            {item}
          </a>
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
        className={`popup popup_branch-popup ${isPopupVisible}`}
        id="js-branch-select-popup"
        onClick={closePopup}
      >
        <div className="popup__inner popup__inner_branch-select">
          <div className="popup__item popup__item_current">
            <a className="popup__name popup__name_white title link" href="#">
              master
            </a>
          </div>
          <ul className="popup__list list">
            {items}
          </ul>
        </div>
      </div>
    )
  }
};
