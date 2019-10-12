import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './PageHeader.sass';
import logo from '../../layout/img/logo.svg';
import Tab from '../Tab';
import RepositoryPopup from '../RepositoryPopup/RepositoryPopup';

export interface PageHeaderProps {
  repos: Array<string>;
  currentRepo: string;
  onRepoSelected: (item: string) => void;
}

export interface PageHeaderState {
  isReposPopupVisible: boolean,
}

export default class PageHeader extends Component<PageHeaderProps, PageHeaderState> {

  state: Readonly<PageHeaderState> = {
    isReposPopupVisible: false,
  };

  onTabClicked = () => {
    this.setState(() => {
      return {
        isReposPopupVisible: !this.state.isReposPopupVisible,
      };
    });
  };

  onRepoSelected = (repo: any) => {
    this.props.onRepoSelected(repo);
    this.setState(() => {
      return {
        isReposPopupVisible: false
      };
    });
  };

  render() {
    const { currentRepo, repos } = this.props;
    const { isReposPopupVisible } = this.state;

    return (
      <header className="page-header" role="banner">
        <div className="page-header__container container">
          <Link className="page-header__home" to="/">
            <img className="page-header__img" src={logo} alt="Yandex Arcanum" width={118} height={20}/>
          </Link>
          <div className="page-header__actions">
            <Tab className="page-header__tab"
                 onTabClicked={this.onTabClicked}
                 currentRepo={currentRepo}
            />
            <RepositoryPopup onPopupClicked={this.onTabClicked}
                             onRepoSelected={this.onRepoSelected}
                             currentRepo={currentRepo}
                             isVisible={isReposPopupVisible}
                             repos={repos}/>
          </div>
        </div>
      </header>
    );
  }
};
