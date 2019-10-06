import React, {Component} from 'react';
import Subheader from '../../components/Subheader';
import Source from '../../components/Source';
import api from '../../services/api';

export default class Home extends Component {
  
  state = {
    git: new api(),
    files: [],
    commits: [],
  };
  
  componentDidMount = () => {
    
    if (this.props.currentRepo) {
      this.state.git.getAllRepoFiles('alena')
        .then((result) => {
          this.setState(() => {
            return {
              files: result.files,
            };
          });
        });
  
      this.state.git.getArrayOfCommits('alena', 'master')
        .then((result) => {
          this.setState(() => {
            return {
              commits: result.commits,
            }
          })
        });
    }
  };
  
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.currentRepo !== prevProps.currentRepo) {
      this.state.git.getAllRepoFiles(this.props.currentRepo)
        .then((result) => {
          this.setState(() => {
            return {
              files: result.files,
            };
          });
        });
  
      this.state.git.getArrayOfCommits(this.props.currentRepo, 'master')
        .then((result) => {
          this.setState(() => {
            return {
              commits: result.commits,
            }
          })
        });
    }
  }
  
  render() {
    return (
      <React.Fragment>
        <Subheader commits={this.state.commits} isBreadcrumbsVisible={false}/>
        <Source files={this.state.files} currentRepo={this.props.currentRepo}/>
      </React.Fragment>
    );
  }
};
