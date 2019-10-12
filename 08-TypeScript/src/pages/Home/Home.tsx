import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import Subheader from '../../components/Subheader';
import Source from '../../components/Source';
import API from '../../services/api';
import Message from '../../components/Message';
import CommitsModel from "../../services/api";

export interface HomeProps {
  currentRepo: string;
}

export interface HomeState {
  git: API;
  files: Array<string>;
  commits: Array<CommitsModel>;
  homeMessage: string;
  isBreadcrumbsVisible: boolean;
}

export default class Home extends Component<HomeProps, HomeState> {

  state: Readonly<HomeState> = {
    git: new API(),
    files: [],
    commits: [],
    homeMessage: 'Выберите репозиторий, чтобы продолжить работу',
    isBreadcrumbsVisible: false,
  };

  updateComponent() {
    const { currentRepo } = this.props;

    if (currentRepo) {
      this.state.git.getAllRepoFiles(currentRepo)
        .then((result) => {
          this.setState(() => {
            return {
              files: result.files,
            };
          });
        });

      this.state.git.getArrayOfCommits(currentRepo, 'master')
        .then((result) => {
          this.setState(() => {
            return {
              commits: result.commits,
            }
          })
        });
    }
  }

  componentDidMount = () => {
    this.updateComponent();
  };

  componentDidUpdate(prevProps: HomeProps) {
    if (this.props.currentRepo !== prevProps.currentRepo) {
      this.updateComponent();
    }
  }

  render() {

    const { commits, files, homeMessage, isBreadcrumbsVisible } = this.state;
    const { currentRepo } = this.props;

    const renderHome = currentRepo ?
      (
        <React.Fragment>
          <Helmet>
            <title>{`Yandex Arcanum: ${currentRepo}`}</title>
          </Helmet>
          <Subheader commits={commits}
                     currentRepo={currentRepo}
                     isBreadcrumbsVisible={isBreadcrumbsVisible}/>
          <Source files={files}
                  currentRepo={currentRepo}/>
        </React.Fragment>
      ) : <Message message={homeMessage} />;

    return (
      <React.Fragment>
        { renderHome }
      </React.Fragment>
    );
  }
};
