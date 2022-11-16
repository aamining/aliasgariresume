import React, { Component } from 'react';
import axios from 'axios';
import CommentItem from './CommentItem';
import AddComment from './AddComment';
import './Comments.css';



class Comments extends Component{

    constructor(){
        super();
        this.state = {
          comments: [],
          token: document.cookie //Read a Cookie with JavaScript

        }
        this.getComments = this.getComments.bind(this);
    }
    

    
    componentDidMount(){
        this.getComments();
    }
 
    getComments(){
       
        axios.request({
            method:'get',
            url:'http://localhost:7000/comments',
            headers: {"Authorization": `Bearer ${this.state.token}`}
  
        })
        .then(response => {
           this.setState({comments:response.data}); console.log("this is from get",response)
        })
        .catch((err) => console.log(err));
    }

    
    render(){ 

        return(

                <div className='comments'>
                    <h1>Comments</h1>
                    {this.state.comments?
                    (this.state.comments.map((comment) => (<CommentItem key = {comment._id} comment={comment} />))):null
                    }

                    {
                    <AddComment doIt={this.getComments}/>
                    }

                </div>
        )
    }    
}

export default Comments;