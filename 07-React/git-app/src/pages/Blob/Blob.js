import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import Subheader from '../../components/Subheader';
import API from '../../services/api';
import BlobViewer from '../../components/BlobViewer';
import Spinner from '../../components/Spinner';

export default class Blob extends Component {
  
  state = {
    git: new API(),
    blob: {
      blob: '',
      size: 0,
    },
    fileName: '',
    commits: [],
    isLoading: true,
    isBreadcrumbsVisible: true,
  };
  
  currentRepo = this.props.currentRepo;
  
  updateComponent() {
    const file = this.props.match.params.pathToFile;
    const currentRepo = this.currentRepo;
    
    if (currentRepo) {
      this.state.git.getArrayOfCommits(currentRepo, 'master')
        .then((result) => {
          this.setState(() => {
            return {
              isLoading: false,
              commits: result.commits,
            }
          })
        });
    
      this.state.git.getBlob(currentRepo, 'master', file)
        .then((result) => {
          if (!result.message) {
            this.setState(() => {
              return {
                isLoading: false,
                blob: result,
              }
            })
          }
        });
    }
  }
  
  componentDidMount = () => {
    const file = this.props.match.params.pathToFile;
    const repoId = this.props.match.params.repositoryId;
    
    if (!this.currentRepo) {
      this.props.onRepoSelected(repoId);
      this.currentRepo = repoId;
    }
    
    this.setState(() => {
      return {
        fileName: file,
      }
    });
    
    this.updateComponent();
  };
  
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.currentRepo !== prevProps.currentRepo) {
      this.updateComponent();
    }
  }
  
  render() {
    const { currentRepo } = this.props;
    const { isLoading, commits, blob, fileName, isBreadcrumbsVisible  } = this.state;
    const arrayOfBreadcrumbs = fileName.split('/');
    
    const renderBlob = isLoading ?
      <Spinner/> :
      (
        <React.Fragment>
          <Helmet>
            <title>{`Yandex Arcanum: ${fileName}`}</title>
          </Helmet>
          <Subheader commits={commits}
                     currentRepo={currentRepo}
                     isBreadcrumbsVisible={isBreadcrumbsVisible}
                     breadcrumbs={arrayOfBreadcrumbs}/>
          <BlobViewer blob={blob}
                      fileName={fileName}/>
        </React.Fragment>
      )
      ;
    
    return (
      <React.Fragment>
        { renderBlob }
      </React.Fragment>
    )
  }
  
}
