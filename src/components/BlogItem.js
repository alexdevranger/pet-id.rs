import React from "react";
import { Link } from "react-router-dom";
import Chip from "./Chip";

const BlogItem = (props) => {
  const { description, title, createdAt, cover, category, id, subCategory } =
    props.blog;
  const { onClick } = props;
  const handleClick = () => {
    onClick("hello");
  };
  console.log(typeof onClick);
  return (
    <div className="blogItem blogItem-wrap">
      <Link className="blogItem blogItem-link" to={`/blog/${id}`}>
        <img className="blogItem blogItem-cover" src={cover} alt="cover" />
      </Link>
      <Chip label={category} className="blogItem" onClick={handleClick} />
      {/* <div className="blog-subCategory" style={{ justifyContent: "left" }}>
        {subCategory.map((category, i) => (
          <div key={i}>
            <Chip label={category} />
          </div>
        ))}
      </div> */}
      <Link className="blogItem blogItem-link" to={`/blog/${id}`}>
        <h3>{title}</h3>
      </Link>
      <p className="blogItem blogItem-desc truncate4lines">{description}</p>
      <footer>
        <div className="blogItem blogItem-author">
          <div>
            <p>{createdAt}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogItem;
