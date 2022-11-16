import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


class AddComment extends Component{

    constructor(){
        super();
        this.state = {
          token: document.cookie,//Read a Cookie with JavaScript
          userId:null
        }
    }

    componentDidMount(){
      this.getUser();
    }


    getUser(){
      axios.request({
        method:'get',
        url:'http://localhost:7000/whoAmI',
        headers: {"Authorization": `Bearer ${this.state.token}`}
  
  
      }).then(response =>{
        this.setState({userId:response.data})        
        
      })
      .catch((err) => console.log("err from whoAmI",err))
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

  getUser;
  onSubmit(e){
    const newComment = {
      name: this.refs.name.value,
      title: this.refs.title.value,
      comm: this.refs.comm.value,
      user_id:this.state.userId
      
    }
    this.addComment(newComment);
    this.props.doIt(); //call a function(getComments) from another component(comments)
    e.preventDefault();
    }
  

  render(){
    return (
     <div>
        <br />
       <Link className="btn grey" to="/">Back</Link>
       <h1>Add A Comment</h1>

       <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <input type="text" name="name" ref="name" required/>
            <label htmlFor="name">Name</label>
          </div>
          <div className="input-field">
            <input type="text" name="title" ref="title" required/>
            <label htmlFor="title">Title</label>
          </div>
          <div className="input-field">
            <input type="text" name="comm" ref="comm" required/>
            <label htmlFor="comm">Comment</label>
          </div>
          <input type="submit" value="Save" className="btn" />
        </form>
      </div>
    )
  }
}

export default AddComment;