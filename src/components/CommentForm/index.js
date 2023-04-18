// CommentForm.js
import React, { useState } from "react";

function CommentForm({ onSubmit }) {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (content.trim() !== "") {
      onSubmit({ author, content });
      setContent("");
    }
  };

  return (
    <form >
      <div>
        <label>Author</label>
        <input type="text" id="author" value={author} onChange={(event) => setAuthor(event.target.value)} />
      </div>
      <div>
        <label>Comment</label>
        <textarea id="content" value={content} onChange={(event) => setContent(event.target.value)} />
      </div>
      <button type="submit" onSubmit={handleSubmit}>Submit</button>
    </form>
  );
}

export default CommentForm;
