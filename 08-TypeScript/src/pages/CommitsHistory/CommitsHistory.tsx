import React, {Component} from 'react';
import { RouteComponentProps } from 'react-router-dom';
import API from '../../services/api';
import Spinner from '../../components/Spinner';
import {Helmet} from 'react-helmet';
import History from '../../components/History';
import Subheader from '../../components/Subheader';
import CommitsModel from "../../services/api";

export interface CommitsHistoryProps {
  currentRepo: string;
  onRepoSelected: (repoId: string) => void;
}

export interface CommitsHistoryState {
  git: API;
  history: Array<CommitsModel>;
  isBreadcrumbsVisible: boolean;
  isLoading: boolean;
}

export default class CommitsHistory extends Component<CommitsHistoryProps & RouteComponentProps<any>, CommitsHistoryState> {

  state = {
    git: new API(),
    isLoading: true,
    isBreadcrumbsVisible: false,
    history: [],
  };

  path = `${this.props.match.params.path}/`;
  currentRepo = this.props.currentRepo;
  commitHash = this.props.match.params.commitHash;

  updateComponent() {
    const currentRepo = this.currentRepo;
    const hash = this.commitHash;

    if (currentRepo) {
      this.state.git.getArrayOfCommits(currentRepo, hash)
        .then((result) => {
          this.setState(() => {
            return {
              isLoading: false,
              history: result.commits,
            }
          })
        });
    }
  }

  componentDidMount = () => {
    const repoId = this.props.match.params.repositoryId;

    if (!this.currentRepo) {
      this.props.onRepoSelected(repoId);
      this.currentRepo = repoId
    }

    this.updateComponent();
  };

  render() {
    const { isLoading, isBreadcrumbsVisible, history  } = this.state;
    const arrayOfBreadcrumbs = this.path.split('/');
    arrayOfBreadcrumbs.pop();

    const renderHistory = isLoading ?
      <Spinner/> :
      (
        <React.Fragment>
          <Helmet>
            <title>{`Yandex Arcanum: ${this.commitHash}`}</title>
          </Helmet>
          <Subheader
            commits={history}
            breadcrumbs={arrayOfBreadcrumbs}
            currentRepo={this.currentRepo}
            isBreadcrumbsVisible={isBreadcrumbsVisible}
          />
          <History history={history} currentRepo={this.currentRepo}/>
        </React.Fragment>
      );


    return (
      <React.Fragment>
        { renderHistory }
      </React.Fragment>
    )
  }

}
