import React, { Component } from 'react';
import axios from 'axios'


class Comments extends Component{

    constructor(){
        super();
        this.state = {
          comments: [],
          token: document.cookie //Read a Cookie with JavaScript

        }
    }
    
    componentWillMount(){
        this.getComments();
    }
    
    getComments(){
       
        axios.request({
            method:'get',
            url:'http://localhost:7000/comments',
            headers: {"Authorization": `Bearer ${this.state.token}`}
  
        })
        .then((response) => {
            console.log(response )
        })
        .catch((err) => console.log(err));
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