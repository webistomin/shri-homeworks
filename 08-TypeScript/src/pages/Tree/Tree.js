import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import Subheader from '../../components/Subheader';
import Source from '../../components/Source';
import API from '../../services/api.ts';

export default class Tree extends Component {
  
  state = {
    git: new API(),
    files: [],
    commits: [],
    isBreadcrumbsVisible: true,
  };
  
  path = `${this.props.match.params.path}/`;
  currentRepo = this.props.currentRepo;
  
  updateComponent() {
    this.state.git.getTree(this.currentRepo, 'master', this.path)
      .then((result) => {
        this.setState(() => {
          return {
            files: result.files,
          };
        });
      });
  
    this.state.git.getArrayOfCommits(this.currentRepo, 'master')
      .then((result) => {
        this.setState(() => {
          return {
            commits: result.commits,
          }
        })
      });
  }
  
  componentDidMount = () => {
    const repoId = this.props.match.params.repositoryId;
    
    if (!this.currentRepo) {
      this.props.onRepoSelected(repoId);
      this.currentRepo = repoId
    }
    
    this.updateComponent();
  };
  
  componentDidUpdate(prevProps) {
    if (this.props.match.params.path !== prevProps.match.params.path) {
      this.path = `${this.props.match.params.path}/`;
      this.updateComponent();
    }
  }
  
  render() {
    const { commits, isBreadcrumbsVisible, files } = this.state;
    const arrayOfBreadcrumbs = this.path.split('/');
    arrayOfBreadcrumbs.pop();
    return (
      <React.Fragment>
        <Helmet>
          <title>{`Yandex Arcanum: ${this.currentRepo}`}</title>
        </Helmet>
        <Subheader
          commits={commits}
          breadcrumbs={arrayOfBreadcrumbs}
          currentRepo={this.currentRepo}
          isBreadcrumbsVisible={isBreadcrumbsVisible}
        />
        <Source files={files} currentRepo={this.currentRepo}/>
      </React.Fragment>
    )
  }
}
