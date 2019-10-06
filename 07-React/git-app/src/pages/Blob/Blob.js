import React, {Component} from 'react';
import Subheader from '../../components/Subheader';
import api from '../../services/api';
import BlobViewer from '../../components/BlobViewer';

export default class Blob extends Component {
  
  state = {
    git: new api(),
    blob: {
      blob: '',
      size: 0,
    },
    fileName: '',
    commits: [],
  };
  
  componentDidMount = () => {
    
    const file = this.props.match.params.pathToFile;
    
    const currentRepo = this.props.currentRepo;
    
    this.setState(() => {
      return {
        fileName: file,
      }
    });
    
    if (currentRepo) {
      this.state.git.getArrayOfCommits(currentRepo, 'master')
        .then((result) => {
          this.setState(() => {
            return {
              commits: result.commits,
            }
          })
        });
  
      this.state.git.getBlob(currentRepo, 'master', file)
        .then((result) => {
          if (!result.message) {
            this.setState(() => {
              return {
                blob: result,
              }
            })
          }
        });
    }
  };
  
  render() {
    return (
      <React.Fragment>
        <Subheader commits={this.state.commits} breadcrumbs={this.state.fileName.split('/')}/>
        <BlobViewer blob={this.state.blob} fileName={this.state.fileName}/>
      </React.Fragment>
    )
  }
  
}
