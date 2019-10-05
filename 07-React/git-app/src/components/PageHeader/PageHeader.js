import React, {Component} from 'react';
import {Link, BrowserRouter as Router} from 'react-router-dom';
import './PageHeader.sass';
import logo from '../../layout/img/logo.svg';
import Tab from '../Tab';
import RepositoryPopup from '../RepositoryPopup/RepositoryPopup';

export default class PageHeader extends Component {
  
  state = {
    isReposPopupVisible: false,
  };
  
  onTabClicked = () => {
    this.setState(() => {
      return {
        isReposPopupVisible: !this.state.isReposPopupVisible,
      };
    });
  };
  
  render() {
    return (
      <header className="page-header" role="banner">
        <div className="page-header__container container">
          <Link className="page-header__home" to="/">
            <img className="page-header__img" src={logo} alt="Yandex Arcanum" width={118} height={20}/>
          </Link>
          <div className="page-header__actions">
            <Tab className="page-header__tab" onTabClicked={this.onTabClicked}/>
            <RepositoryPopup onPopupClicked={this.onTabClicked} isVisible={this.state.isReposPopupVisible}
                             repos={this.props.repos}/>
          </div>
        </div>
      </header>
    );
  }
};
