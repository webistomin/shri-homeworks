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
  currentRepo = this.props.currentRepo;
  
  componentDidMount = () => {
    
    if (!this.currentRepo) {
      this.props.onRepoSelected(this.props.match.params.repositoryId);
      this.currentRepo = this.props.match.params.repositoryId
    }
    
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
  };
  
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.match.params.path !== prevProps.match.params.path) {
      this.path = `${this.props.match.params.path}/`;
      this.state.git.getTree(this.currentRepo, 'master', this.path)
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
        <Subheader
          commits={this.state.commits}
          breadcrumbs={this.path.split('/')}
          isBreadcrumbsVisible={true}
        />
        <Source files={this.state.files} currentRepo={this.currentRepo}/>
      </React.Fragment>
    )
  }
}
