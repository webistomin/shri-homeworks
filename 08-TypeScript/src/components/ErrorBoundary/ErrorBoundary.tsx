import React, { Component } from 'react';
import ErrorIndicator from '../ErrorIndicator';

export interface ErrorBoundaryState {
  hasError?: boolean,
}

export default class ErrorBoundary extends Component<ErrorBoundaryState> {

  state: Readonly<ErrorBoundaryState> = {
    hasError: false
  };

  componentDidCatch() {
    this.setState({
      hasError: true
    });
  }

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator/>
    }

    return this.props.children;
  }
}
