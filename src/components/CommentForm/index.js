function CommentForm(props) {
  return (
    <div className="comment-form">
      <div className="comment-form__title">Add a comment</div>
      <form className="comment-form__form">
        <div className="comment-form__form-field">
          <label className="comment-form__form-label" htmlFor="author">
            Author
          </label>
          <input
            className="comment-form__form-input"
            type="text"
            name="author"
            id="author"
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
          />
        </div>
        <button className="comment-form__form-button">Submit</button>
      </form>
    </div>
  );

  // return null;
}

export default CommentForm;
