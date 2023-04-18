// // CommentForm.js
// import React, { useState } from "react";

// function CommentForm({ onSubmit }) {
//   const [author, setAuthor] = useState("");
//   const [content, setContent] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (content.trim() !== "") {
//       onSubmit({ author, content });
//       setContent("");
//     }
//   };

//   return (
//     <form >
//       <div>
//         <label>Author</label>
//         <input type="text" id="author" value={author} onChange={(event) => setAuthor(event.target.value)} />
//       </div>
//       <div>
//         <label>Comment</label>
//         <textarea id="content" value={content} onChange={(event) => setContent(event.target.value)} />
//       </div>
//       <button type="submit" onSubmit={handleSubmit}>Submit</button>
//     </form>
//   );
// }

// export default CommentForm;

import React, { useState } from "react";
function CommentForm({ onSubmit }) {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent page refresh so data is not lost
    if (content.trim() !== "") { // check if content is not empty
      onSubmit(author, content); // pass the author and content as separate arguments
      setAuthor(""); // reset author and content after submitting
      setContent("");
    }
  };

  return (
    <form onSubmit={handleSubmit}> {/* attach onSubmit listener to form element */}
      <div>
        <label>Author</label>
        <input type="text" id="author" value={author} onChange={(event) => setAuthor(event.target.value)} />
      </div>
      <div>
        <label>Comment</label>
        <textarea id="content" value={content} onChange={(event) => setContent(event.target.value)} />
      </div>
      <button type="submit">Submit</button> {/* dont use onClick here because it will not work with the form element*/}
    </form>
  );
}

export default CommentForm;
