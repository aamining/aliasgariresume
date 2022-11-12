import React from 'react'
//import './CommentList.css';

const CommentItem= (props) => (
  <div className="box">
    <div className="commentItem">
      <p> {props.comment.name} as a {props.comment.title} says {props.comment.comm} </p>
    </div>
  </div>
  );
  export default CommentItem;