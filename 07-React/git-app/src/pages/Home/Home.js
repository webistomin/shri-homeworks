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
  };
  
  render() {
    return (
      <React.Fragment>
        <Subheader commits={this.state.commits}/>
        <Source files={this.state.files}/>
      </React.Fragment>
    );
  }
};
