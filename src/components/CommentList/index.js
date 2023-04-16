import { useState } from "react";

function CommentForm({ onSubmit }) {
  const [author, setAuthor] = useState("Anon Author");
  const [comment, setComment] = useState("");

  function handleAuthorChange(event) {
    setAuthor(event.target.value);
  }

  function handleCommentChange(event) {
    setComment(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!comment.trim()) {
      return;
    }
    onSubmit({ author, content: comment });
    setComment("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="author-input">Author:</label>
        <input
          type="text"
          id="author-input"
          value={author}
          onChange={handleAuthorChange}
        />
      </div>
      <div>
        <label htmlFor="comment-input">Comment:</label>
        <textarea
          id="comment-input"
          value={comment}
          onChange={handleCommentChange}
        ></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default CommentForm;
