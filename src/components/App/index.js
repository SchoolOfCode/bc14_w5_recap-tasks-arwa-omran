import React from "react";
import BlogPost from "../BlogPost";
import Comment from "../Comment";

function App() {
  const [blog, setBlog] = React.useState("");
  function handleBlogsUpdate(updatedBlog) {
    setBlog(updatedBlog);
  }
  return (
    <div>
      <BlogPost
        title="My First Post"
        author="Arwa Omran"
        datePosted="16/04/2023"
        content="This is my first post"
        imageSrc="https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        imageAlt="A couple of coders."
        onUpdate={handleBlogsUpdate} 
      />
    </div>
  );

  const [comments, setComments] = React.useState("");
  function handleCommentsUpdate(updatedComments) {
    setComments(updatedComments);
  }
  return (
    <div>
      <Comment 
        id="1"
        author="Arwa Omran"
        content="Great post!"
        onUpdate={handleCommentsUpdate}
      />
    </div>
  );
}

export default App;
