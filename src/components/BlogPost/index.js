import React from "react";

const BlogPost = ({ blog }) => {

  return (
    <div className="blog-post">
      <img src={blog.imageSrc} alt={blog.imageAlt} />
      <p className="caption">{blog.imageAlt}</p>
      <h2>{blog.title}</h2>
      <h3 className="author">{`By ${blog.author}`}</h3>
      <p className="date">{blog.datePosted}</p>
      <p className="content">{blog.content}</p>
    </div>
  );
};

export default BlogPost;
