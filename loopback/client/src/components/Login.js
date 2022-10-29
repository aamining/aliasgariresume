import React, { Component } from 'react';
import axios from 'axios'


class Login extends Component{

    NewUser(newUser){
        axios.request({
          method:'post',
          url:'http://localhost:7000//users/login',
          data: newUser
        }).then((response) => window.location.assign('http://localhost:3000/comments'))
          
        .catch(err => console.log(err));
      }
  
    onSubmit(e){
        const newUser = {
          email: this.refs.email.value,
          password: this.refs.password.value,

        }
        this.NewUser(newUser);
        e.preventDefault();
      }

  render(){
    return (
 
       <div>

       <h1>Login</h1>
       <form onSubmit={this.onSubmit.bind(this)}>
       
       
       <div className="input-field">
            <input type="text" name="email" ref="email" required/>
            <label htmlFor="email">Email</label>
        </div>

        <div className="input-field">
            <input type="text" name="password" ref="password" required/>
            <label htmlFor="password">Password</label>
        </div>

        
        <input type="submit" value="Submit" className="btn" />
       </form>
       
       
      </div>
      
    )
  }
}

export default Login;