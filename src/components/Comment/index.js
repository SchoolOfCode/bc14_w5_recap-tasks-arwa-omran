import React from "react";

const Comment = ({ author, content }) => {
  // Get the initials of the author
  const initials = author
    .split(" ")
    .map((name) => name.charAt(0))
    .join("")
    .toUpperCase();

  return (
    <div className="comment">
      <div className="avatar">{initials}</div>
      <div className="comment-text">
        <p className="author">{author}</p>
        <p className="content">{content}</p>
      </div>
    </div>
  );
};

export default Comment;
