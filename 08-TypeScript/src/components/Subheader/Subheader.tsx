import React, { Component } from 'react';
import './Subheader.sass';
import Breadcrumbs from '../Breadcrumbs';
import Select from '../Select';
import BranchPopup from '../BranchPopup';
import SubheaderInfo from './SubheaderInfo';
import CommitsModel from "../../services/api";

export interface SubheaderProps {
  commits: Array<CommitsModel>;
  isBreadcrumbsVisible: boolean;
  breadcrumbs?: Array<string>;
  currentRepo: string;
}

export interface SubheaderState {
  isBranchPopupVisible: boolean,
}

export default class Subheader extends Component<SubheaderProps, SubheaderState> {

  state: Readonly<SubheaderState> = {
    isBranchPopupVisible: false,
  };

  onSelectClicked = () => {
    this.setState(() => {
      return {
        isBranchPopupVisible: !this.state.isBranchPopupVisible,
      }
    })
  };

  render() {
    const { commits, isBreadcrumbsVisible, breadcrumbs, currentRepo } = this.props;
    const { isBranchPopupVisible } = this.state;

    let lastCommit = {
      author: '',
      date: '',
      message: '',
      short_commit: '',
    };

    if (commits && commits.length !== 0) {
      lastCommit = {...commits[0]}
    }

    const branches = ['master', 'dev'];

    const renderBreadcrumbs = () => {
      if (isBreadcrumbsVisible) {
        return <Breadcrumbs
          currentRepo={currentRepo}
          breadcrumbs={breadcrumbs ? breadcrumbs : []}/>
      } else {
        return null;
      }
    };

    return (
      <div className="subheader">
        <div className="subheader__container container">
          <div className="subheader__heading">
            { renderBreadcrumbs() }
          </div>
          <div className="subheader__current">
            <div className="subheader__row subheader__row_margin-bottom">
              <h1 className="subheader__title title text text_size_xl">{currentRepo}</h1>
              <div className="subheader__dropdown">
                <Select className="subheader__select" onSelectClicked={ this.onSelectClicked }  />
                <BranchPopup branches={branches} isVisible={isBranchPopupVisible} onPopupClicked={() => {}}/>
              </div>
            </div>
            <SubheaderInfo lastCommit={lastCommit} currentRepo={currentRepo}/>
          </div>
        </div>
      </div>
    )
  }
};
