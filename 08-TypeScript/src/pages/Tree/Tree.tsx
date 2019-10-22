import React, {Component} from 'react';
import { RouteComponentProps } from 'react-router-dom';
import {Helmet} from 'react-helmet';
import Subheader from '../../components/Subheader';
import Source from '../../components/Source';
import API from '../../services/api';
import CommitsModel from "../../services/api";

export interface TreeProps {
  currentRepo: string;
  onRepoSelected: (repoId: string) => void;
}

export interface TreeState {
  git: API;
  files: Array<string>;
  commits: Array<CommitsModel>;
  isBreadcrumbsVisible: boolean;
}

export default class Tree extends Component<TreeProps & RouteComponentProps<any>, TreeState> {

  state: Readonly<TreeState> = {
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

  componentDidUpdate(prevProps: RouteComponentProps<any>) {
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