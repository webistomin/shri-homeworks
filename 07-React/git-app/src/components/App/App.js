import React, {Component, Suspense, lazy} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.sass';

import API from '../../services/api';

import PageHeader from '../PageHeader';
import PageFooter from '../PageFooter';
import ErrorBoundary from '../ErrorBoundary';
import Spinner from '../Spinner';

import Home from '../../pages/Home';

const Error404 = lazy(() => import('../Error404'));
const Blob = lazy(() => import('../../pages/Blob'));
const Tree = lazy(() => import('../../pages/Tree'));

export default class App extends Component {
  
  state = {
    git: new API(),
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
      <ErrorBoundary>
        <Router>
          <Suspense fallback={<Spinner/>}>
            <PageHeader
              repos={this.state.repos}
              currentRepo={this.state.currentRepo}
              onRepoSelected={this.onRepoSelected}
            />
            <main className="page-content" role="main">
              <Switch>
                <Route
                  path="/"
                  exact
                  render={(props) => <Home {...props} currentRepo={this.state.currentRepo}/>}
                />
                <Route
                  exact
                  path="/api/repos/:repositoryId/blob/:commitHash/:pathToFile+"
                  render={(props) => <Blob {...props}
                                           currentRepo={this.state.currentRepo}
                                           onRepoSelected={this.onRepoSelected}/>}
                />
                <Route
                  exact
                  path="/api/repos/:repositoryId/tree/:commitHash?/:path+"
                  render={(props) => <Tree {...props}
                                           currentRepo={this.state.currentRepo}
                                           onRepoSelected={this.onRepoSelected}/>}
                />
                
                <Route component={Error404}/>
              </Switch>
            </main>
            <PageFooter/>
          </Suspense>
        </Router>
      </ErrorBoundary>
    );
  }
};
