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
    
    this.setState(() => {
      return {
        fileName: file,
      }
    });
    
    this.state.git.getArrayOfCommits('alena', 'master')
      .then((result) => {
        this.setState(() => {
          return {
            commits: result.commits,
          }
        })
      });
  
    this.state.git.getBlob('alena', 'master', file)
      .then((result) => {
        if (!result.message) {
          this.setState(() => {
            return {
              blob: result,
            }
          })
        }
      });
  };
  
  render() {
    return (
      <React.Fragment>
        <Subheader commits={this.state.commits}/>
        <BlobViewer blob={this.state.blob} fileName={this.state.fileName}/>
      </React.Fragment>
    )
  }
  
}
