import { useState } from "react";

function CommentForm({ onSubmit }) {
  const [author, setAuthor] = useState("");
  const [comment, setComment] = useState("");

  function handleAuthorChange(event) {
    setAuthor(event.target.value);
  }

  function handleCommentChange(event) {
    setComment(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit({ author, content: comment });
    setAuthor("");
    setComment("");
  }

  return (
    <div className="comment-form">
      <div className="comment-form__title">Add a comment</div>
      <form className="comment-form__form" onSubmit={handleSubmit}>
        <div className="comment-form__form-field">
          <label className="comment-form__form-label" htmlFor="author">
            Author
          </label>
          <input
            className="comment-form__form-input"
            type="text"
            name="author"
            id="author"
            value={author}
            onChange={handleAuthorChange}
          />
        </div>
        <div className="comment-form__form-field">
          <label className="comment-form__form-label" htmlFor="content">
            Content
          </label>
          <textarea
            className="comment-form__form-input"
            name="content"
            id="content"
            value={comment}
            onChange={handleCommentChange}
          />
        </div>
        <button className="comment-form__form-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CommentForm;

