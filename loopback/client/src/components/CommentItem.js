import React,{Component} from 'react';
import axios from 'axios';

class CommentItem extends Component{

  constructor(){
    super();
    this.state = {

      
      userId:null,
      token: document.cookie//Read a Cookie with JavaScript

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
    .catch((err) => console.log("error from whoAmI",err))
  }

  deleteItem(id){
    axios.request({

      headers: {"Authorization": `Bearer ${this.state.token}`},
        method:'delete',
        url:'http://localhost:7000/comments/'+id
        
  
      })
      .then(response => {
        console.log("this is an ok from delete", response) 
        
      })
      .catch(err => console.log("this error is from delete:",err));

  }
  


  render(){
    return(

    this.state.userId===this.props.comment.user_id?
      
    <p><button onClick={()=>this.deleteItem(this.props.comment._id)}>X</button>
       You said that: {this.props.comment.comm} </p>
     
      :
      <p>{this.props.comment.name} as a {this.props.comment.title} says {this.props.comment.comm}</p>
      
    )
    
  }

}
export default CommentItem;




// const CommentItem= (props) => (

//   <div className="box">
//     <div className="commentItem">
//       <p> {props.comment.name} as a {props.comment.title} says {props.comment.comm} </p>
//     </div>
//   </div>

//   );
//   export default CommentItem;