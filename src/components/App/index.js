import React, { useState } from "react";
import BlogPost from "../BlogPost";
import CommentList from "../CommentList";
import CommentForm from "../CommentForm";
import { blog } from "../../data/blogs";

function App() {
  const [comments, setComments] = useState([]);
  const [commentId, setCommentId] = useState(0);


  function addComment(author, content) {
    const newComment = {
      id: commentId,
      author: author,
      content: content,
    };
      setComments([...comments, newComment]);
      newCommentId();
  }

  function newCommentId() {
    setCommentId(commentId + 1);
  }

  return (
    <div>
      <BlogPost blog={blog} />
      <CommentList comments={comments} />
      <CommentForm onSubmit={addComment} />
    </div>
  );
}

export default App;

