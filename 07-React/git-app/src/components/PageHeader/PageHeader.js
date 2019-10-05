import React, { Component } from 'react';
import './PageHeader.sass';
import logo from '../../layout/img/logo.svg'
import Tab from '../Tab/Tab';

export default class PageHeader extends Component {
  render() {
    return (
      <header className="page-header" role="banner">
        <div className="page-header__container container"><a className="page-header__home" href="/">
          <img className="page-header__img" src={logo} alt="Yandex Arcanum" width={118} height={20} />
        </a>
          <div className="page-header__actions">
            <Tab className="page-header__tab"/>
          </div>
        </div>
      </header>
    )
  }
};
