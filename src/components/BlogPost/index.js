import React from "react";

function BlogPost(props) {

  return (
    <div className="blog-post">
      <h1 className="blog-post__title">{props.title}</h1>
      <div className="blog-post__author">{props.author}</div>
      <div className="blog-post__date">Posted on {props.datePosted}</div>
      <img className = "blog-post__image" src={props.imageSrc} alt={props.imageAlt} />
      <p className = "blog-post__content">{props.content}</p>
    </div>
  )};

export default BlogPost;

/*

  function createMarkup() {
    return { __html: props.content };
  }

  function renderImage() {
    if (props.imageSrc) {
      return (
        <img
          className="blog-post__image"
          src={props.imageSrc}
          alt={props.imageAlt}
        />
      );
    }
  }

        {renderImage()}
      <div
        className="blog-post__content"
        dangerouslySetInnerHTML={createMarkup()}
      />
    </div>

 const { id } = useParams();
  const [post, setPost] = useState(null);

title: "My First Post",
      author: "Chris Meah",
      datePosted: "20/11/2019",
      content: `
        A structure used in most apps and games.
        It's a way to keep doing the same.
        While a condition is true,
        Or for one to twenty-two.
        If endless, for errors we blame
        ..........
        Loop `,
      imageSrc: "https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      imageAlt: "A couple of coders."
*/