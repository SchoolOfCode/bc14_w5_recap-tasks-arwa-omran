import React, { useState } from "react";

function CommentForm({ onSubmit }) {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent page refresh so data is not lost
    if (content.trim() !== "" && author.trim() !== "") { // check if content and author are not empty
      onSubmit(author, content); // pass the author and content as separate arguments
      setAuthor(""); // reset author and content after submitting
      setContent("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
    <div className = "comment-form">
      <h2>Leave a comment</h2>
      <div>
        <label htmlFor="author">Author</label>
        <input type="text" id="author" value={author} onChange={(event) => setAuthor(event.target.value)} />
      </div>
      <div>
        <label htmlFor="content">Comment</label>
        <textarea id="content" value={content} onChange={(event) => setContent(event.target.value)} />
      </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default CommentForm;
