import React, { useState } from "react";
import BlogPost from "../BlogPost";
import CommentList from "../CommentList";
import CommentForm from "../CommentForm";
import { blog } from "../../data/blogs";
import "./style.css";

function App() {
  const [comments, setComments] = useState([]);
  const [commentId, setCommentId] = useState(0);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  function addComment(author, content) {
    const newComment = {
      id: commentId,
      author: author,
      content: content,
    };
    setComments([...comments, newComment]);
    newCommentId();
    setHasSubmitted(true);
  }

  function newCommentId() {
    setCommentId(commentId + 1);
  }

  return (
    <div>
      <BlogPost blog={blog} />
      {hasSubmitted ? <h2 className = "comments-title">Comments section</h2> : null}
      <CommentList comments={comments} />
      <CommentForm onSubmit={addComment} />
    </div>
  );
}

export default App;

