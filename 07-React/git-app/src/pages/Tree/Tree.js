import React, {Component} from 'react';
import Subheader from '../../components/Subheader';
import Source from '../../components/Source';
import api from '../../services/api';

export default class Tree extends Component {
  
  state = {
    git: new api(),
    files: [],
    commits: [],
  };
  
  path = `${this.props.match.params.path}/`;
  
  
  componentDidMount = () => {
    this.state.git.getTree('alena', 'master', this.path)
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
  
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.match.params.path !== prevProps.match.params.path) {
      this.path = `${this.props.match.params.path}/`;
      this.state.git.getTree('alena', 'master', this.path)
        .then((result) => {
          this.setState(() => {
            return {
              files: result.files,
            };
          });
        });
    }
  }
  
  render() {
    return (
      <React.Fragment>
        <Subheader commits={this.state.commits} breadcrumbs={this.path.split('/')}/>
        <Source files={this.state.files}/>
      </React.Fragment>
    )
  }
}
