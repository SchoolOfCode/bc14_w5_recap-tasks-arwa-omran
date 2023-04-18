import React from "react";

const BlogPost = ({ blog }) => {

  return (
    <div className="blog-post">
      <h1 className = "blog-title">{blog.title}</h1>
      <h2 className="author">{`By ${blog.author}`}</h2>
      <p className="date">{blog.datePosted}</p>
      <div className="blog-post-content">
        <img src={blog.imageSrc} alt={blog.imageAlt} />
        <p className="caption">{blog.imageAlt}</p>
        <p className="content">{blog.content}</p>
      </div>
    </div>
  );
};

export default BlogPost;
