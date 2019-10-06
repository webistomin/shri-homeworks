import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import Subheader from '../../components/Subheader';
import Source from '../../components/Source';
import API from '../../services/api';
import Message from '../../components/Message';

export default class Home extends Component {
  
  state = {
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
  
  componentDidUpdate(prevProps) {
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
