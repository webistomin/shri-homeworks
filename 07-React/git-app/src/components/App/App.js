import React, { Component } from 'react';
import './App.sass';

import PageHeader from '../PageHeader';
import PageFooter from '../PageFooter';
import Subheader from '../Subheader';
import Source from '../Source';

import api from '../../services/api';

export default class App extends Component {
  
  state = {
    git: new api(),
    files: [],
  };
  
  componentDidMount = () => {
    
    this.state.git.getAllRepos()
      .then((result) => {
        this.setState(() => {
          return {
            repos: result.git_repos,
          }
        })
      });
  
    this.state.git.getAllRepoFiles('alena')
      .then((result) => {
        this.setState(() => {
          return {
            files: result.files,
          }
        })
      });
  };
  
  
  render() {
    return (
      <React.Fragment>
        <PageHeader/>
        <main className="page-content" role="main">
          <Subheader/>
          <Source files={this.state.files}/>
        </main>
        <PageFooter/>
      </React.Fragment>
    )
  }
};
