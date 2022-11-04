import React, { Component } from 'react';
import axios  from 'axios'


class Login extends Component{

  constructor(){
    super();
    this.state = {
      token: []
    }
  }
  
    NewUser(newUser){
        axios.request({
          method:'post',
          url:'http://localhost:7000//users/login',
          data: newUser,
          

        }).then(response => 
          //get token from response
          { const token=response.data.token;
            //set JWT token to local
            localStorage.setItem("token", token);
            //set token to axios common header
            //setAuthToken(token);
            //headers: {"Authorization", `Bearer ${token}`}
            //axios.defaults.headers.common['Authorization'] = `bearer ${token}`
            //put the token in cookie
            document.cookie= token;
            //redirect user to other page
            
            document.location.assign('http://localhost:3000/comments')
            console.log(token)
          })
        
        
          //headers: {"Authorization" : `Bearer ${token}`}
          //axios.defaults.headers.common['Authorization']=token)
          
          
        
        .catch((err) => console.log(err))
        
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