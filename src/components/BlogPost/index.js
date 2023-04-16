import React from "react";

const BlogPost = ({ blog }) => {
  return (
    <div className="blog-post">
      <img src={blog.imageSrc} alt={blog.imageAlt} />
      <h2>{blog.title}</h2>
      <p className="author">{`By ${blog.author} on ${blog.datePosted}`}</p>
      <p className="content">{blog.content}</p>
    </div>
  );
};

export default BlogPost;
