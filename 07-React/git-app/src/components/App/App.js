import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.sass';

import PageHeader from '../PageHeader';
import PageFooter from '../PageFooter';
import Home from '../../pages/Home';
import Blob from '../../pages/Blob';
import api from '../../services/api';


export default class App extends Component {
  
  state = {
    git: new api(),
    repos: [],
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
  
  render() {
    return (
      <React.Fragment>
        <Router>
          <PageHeader repos={this.state.repos}/>
          <main className="page-content" role="main">
            
            <Route path="/" exact component={Home}/>
            <Route exact path="/api/repos/:repositoryId/blob/:commitHash/:pathToFile([^/]*)" component={Blob}/>
            <Route exact path="/api/repos/:repositoryId/tree/:commitHash?/:path([^/]*)?" render={() => {
              return (
                <h2>456</h2>
              );
            }}/>
          
          </main>
          <PageFooter/>
        </Router>
      </React.Fragment>
    );
  }
};
