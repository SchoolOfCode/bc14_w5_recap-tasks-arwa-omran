import React from "react";

function Comment({ author, content }) {
  // Get the initials of the author (up to 3)
  const initials = author
    .split(" ")
    .map((name, index) => index < 3 ? name.charAt(0) : "")
    .join("")
    .toUpperCase();

  return (
    <div className="comment">
    <div className = "author-comment">
      <div className="initials-circle">{initials}</div>
        <h3 className="author-comment-name">{author}</h3>
    </div>
      <p className="comment-text">{content}</p>
    </div>
  );
};

export default Comment;
