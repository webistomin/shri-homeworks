import React, { Component } from 'react';
import './Subheader.sass';
import Breadcrumbs from '../Breadcrumbs';
import Select from '../Select';
import Name from '../Name';
import BranchPopup from '../BranchPopup';

export default class Subheader extends Component {
  
  state = {
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
    const commits = this.props.commits;
  
    let lastCommit = {
      author: '',
      date: '',
      message: '',
      short_commit: '',
    };
  
    if (commits && commits.length !== 0) {
      lastCommit = {...commits[0]}
    }
  
    const breadcrumbs = [
      {
        id: 1,
        link: '/',
        label: 'arcadia'
      },
      {
        id: 2,
        link: '/',
        label: 'arcadia'
      }
    ];
  
    const branches = ['master', 'dev'];
  
    return (
      <div className="subheader">
        <div className="subheader__container container">
          <div className="subheader__heading">
            <Breadcrumbs breadcrumbs={this.props.breadcrumbs}/>
          </div>
          <div className="subheader__current">
            <div className="subheader__row subheader__row_margin-bottom">
              <h1 className="subheader__title title text text_size_xl">arcadia</h1>
              <div className="subheader__dropdown">
                <Select className="subheader__select" onSelectClicked={ this.onSelectClicked }  />
                <BranchPopup branches={branches} isVisible={this.state.isBranchPopupVisible}/>
              </div>
            </div>
            <div className="subheader__row">
              <p className="subheader__info text text_size_l paragraph">
                Last commit
                &nbsp;
                <a
                  className="subheader__link link link_color_blue text text_size_xs link_hover_underline"
                  href="#">{lastCommit.short_commit}</a> on&nbsp;
                <a
                  className="subheader__link link link_color_blue link_hover_underline"
                  href="#">
                  <time
                    className="subheader__time">
                    {new Date(lastCommit.date).toUTCString()}
                  </time>
                </a> by&nbsp;
                <Name className="subheader__name" name={lastCommit.author}/>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
};
