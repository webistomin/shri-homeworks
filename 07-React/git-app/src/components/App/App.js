import React, { Component } from 'react';
import './App.sass';

import PageHeader from '../PageHeader';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <PageHeader/>
        <main className="page-content" role="main">
          <h1>Hello World!</h1>
        </main>
      </React.Fragment>
    )
  }
};
