import React, { Component } from 'react';
import axios from 'axios'

class Comments extends Component{

    constructor(){
        super();
        this.state = {
          comments: []
        }
      }
    
      componentWillMount(){
        this.getComments();
      }
    
      getComments(){
        axios.get('http://localhost:7000/comments')
          .then(response => {
            this.setState({comments: response.data}, () => {
              console.log(this.state);
            })
        })
        .catch(err => console.log(err));
      }

  render(){
    const commentItems = this.state.comments.map((comment, i) => {
        
      })
      return(
        <div>
            {this.commentItems}
        </div>
        )
  }
}

export default Comments;