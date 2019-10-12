import React, {Component} from 'react';
import API from '../../services/api.ts';
import Spinner from '../../components/Spinner';
import {Helmet} from 'react-helmet';
import History from '../../components/History';
import Subheader from '../../components/Subheader';

export default class CommitsHistory extends Component {
  
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
