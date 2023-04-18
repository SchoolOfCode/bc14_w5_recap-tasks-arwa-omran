import React from "react";

function Comment({ author, content }) {
  // Get the initials of the author
  const initials = author
    .split(" ")
    .map((name) => name.charAt(0))
    .join("")
    .toUpperCase();

  return (
    <div className="comment">
      <div className="initials-circle">{initials}</div>
      <div className="comment-text">
        <h3 className="author">{author}</h3>
        <p className="content">{content}</p>
      </div>
    </div>
  );
};

export default Comment;
