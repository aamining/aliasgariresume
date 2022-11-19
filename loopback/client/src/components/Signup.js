import React, { Component } from 'react';
import axios from 'axios'
import './Signup.css'


class Signup extends Component{

    NewUser(newUser){
        axios.request({
          method:'post',
          url:'http://localhost:7000/signup',
          data: newUser,
          
        }).then((response) => window.location.assign('http://localhost:3000/login'))
          
        .catch(err => console.log(err));
      }
  
    onSubmit(e){
        const newUser = {
          username:this.refs.username.value,
          email: this.refs.email.value,
          password: this.refs.password.value,
          

        }
        this.NewUser(newUser);
        e.preventDefault();
      }

  render(){
    return (
 
       <div className='signup'>

       <h1>Signup</h1>
       <form onSubmit={this.onSubmit.bind(this)}>
       <div className="input-field">
            <input type="text" name="username" ref="username" required/>
            <label htmlFor="username">Username</label>
        </div>
       
       <div className="input-field">
            <input type="text" name="email" ref="email" required/>
            <label htmlFor="email">email</label>
        </div>

        <div className="input-field">
            <input type="password" name="password" ref="password" required/>
            <label htmlFor="password">Password</label>
        </div>

        
        <input type="submit" value="Submit" className="btn" />
       </form>
       
       
      </div>
      
    )
  }
}

export default Signup;