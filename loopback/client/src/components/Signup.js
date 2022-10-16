import React, { Component } from 'react';
//import {Link} from "react-router-dom";
import axios from 'axios'


class Signup extends Component{

    NewUser(newUser){
        axios.request({
          method:'post',
          url:'/signup',
          data: newUser
        }).then((response) => response )
        .catch(err => console.log(err));
      }
  
    onSubmit(e){
        const newUser = {
          email: this.refs.name.value,
          password: this.refs.city.value,
          
        }
        this.NewUser(newUser);
        e.preventDefault();
      }

  render(){
    return (
 
       <div>

       <h1>Signup</h1>
       <form onSubmit={this.onSubmit.bind(this)}>
       <div className="input-field">
            <input type="text" name="email" ref="email" />
            <label htmlFor="email">Email</label>
        </div>
        <div className="input-field">
            <input type="text" name="password" ref="password" />
            <label htmlFor="password">Password</label>
        </div>
        <input type="submit" value="Submit" className="btn" />
       </form>
       
       
      </div>
      
    )
  }
}

export default Signup;