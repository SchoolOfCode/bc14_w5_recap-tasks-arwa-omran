import React, { useState } from "react";
import BlogPost from "../BlogPost";
import CommentList from "../CommentList";
import CommentForm from "../CommentForm";
import { blog } from "../../data/blogs";

function App() {
  const [comments, setComments] = useState([]);

  function addComment(author, content) {
    const newComment = {
      id: Date.now().toString(),
      author,
      content,
    };
    setComments((prevComments) => [...prevComments, newComment]);
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

