function Comment(props) {
  return (
    <div className="comment">
      <div className="comment__id">{props.id}</div>
      <div className="comment__author">{props.author}</div>
      <div className="comment__content">{props.content}</div>
    </div>
  );
  // return null;
}

export default Comment;
