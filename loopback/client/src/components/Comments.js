import React, { Component } from 'react';
import axios from 'axios';
import CommentItem from './CommentItem';


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

    addComment(newComment){
        axios.request({
    
        headers: {"Authorization": `Bearer ${this.state.token}`},
          method:'post',
          url:'http://localhost:7000/comments',
          data: newComment,
    
        }).then(response => {
          console.log("this is from addcomment page:", response)
          
        }).catch(err => console.log(err));
      }
    
      onSubmit(e){
        const newComment = {
          name: this.refs.name.value,
          title: this.refs.title.value,
          comm: this.refs.comm.value
        }
        this.addComment(newComment);
        this.getComments(); //this is for reaction as react. otherwise we need to refresh the page to see the new comment. need to bind this.
        e.preventDefault();
      }

    render(){ 

        return(
            <div>
                <h1>Comments</h1>
                {this.state.comments?
                (this.state.comments.map((comment) => (<CommentItem key = {comment._id} comment={comment} />))):null
                }
                
                <br />
                <h1>Add A Comment</h1>

                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className="input-field">
                        <input type="text" name="name" ref="name" />
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="title" ref="title" />
                        <label htmlFor="title">Title</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="comm" ref="comm" />
                        <label htmlFor="comm">Comment</label>
                    </div>
                    <input type="submit" value="Ok !" className="btn" />
                </form>

            </div>
            

        )
    }    
}

export default Comments;