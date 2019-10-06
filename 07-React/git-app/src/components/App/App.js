import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.sass';

import api from '../../services/api';

import PageHeader from '../PageHeader';
import PageFooter from '../PageFooter';
import Home from '../../pages/Home';
import Blob from '../../pages/Blob';
import Tree from '../../pages/Tree';


export default class App extends Component {
  
  state = {
    git: new api(),
    repos: [],
    currentRepo: '',
  };
  
  componentDidMount = () => {
    
    this.state.git.getAllRepos()
      .then((result) => {
        this.setState(() => {
          return {
            repos: result.git_repos,
          };
        });
      });
  };
  
  onRepoSelected = (repo) => {
    this.setState(() => {
      return {
        currentRepo: repo,
      };
    });
  };
  
  render() {
    return (
      <React.Fragment>
        <Router>
          <PageHeader
            repos={this.state.repos}
            currentRepo={this.state.currentRepo}
            onRepoSelected={this.onRepoSelected}
          />
          <main className="page-content" role="main">
            
            <Route
              path="/"
              exact
              render={(props) => <Home {...props} currentRepo={this.state.currentRepo} />}
            />
            <Route
              exact
              path="/api/repos/:repositoryId/blob/:commitHash/:pathToFile+"
              render={(props) => <Blob {...props} currentRepo={this.state.currentRepo} />}
            />
            <Route
              exact
              path="/api/repos/:repositoryId/tree/:commitHash?/:path+"
              render={(props) => <Tree {...props}
                                       currentRepo={this.state.currentRepo}
                                       onRepoSelected={this.onRepoSelected}/>}
            />
          
          </main>
          <PageFooter/>
        </Router>
      </React.Fragment>
    );
  }
};
