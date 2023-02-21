import React from "react";
import { Link } from "react-router-dom";
import Chip from "../../../common/Chip";
import "./styles.css";

const BlogItem = ({
  blog: { description, title, createdAt, cover, category, id, subCategory },
}) => {
  return (
    <div className="blogItem-wrap">
      <Link className="blogItem-link" to={`/blog/${id}`}>
        <img className="blogItem-cover" src={cover} alt="cover" />
      </Link>
      <Chip label={category} />
      {/* <div className="blog-subCategory" style={{ justifyContent: "left" }}>
        {subCategory.map((category, i) => (
          <div key={i}>
            <Chip label={category} />
          </div>
        ))}
      </div> */}
      <Link className="blogItem-link" to={`/blog/${id}`}>
        <h3>{title}</h3>
      </Link>
      <p className="blogItem-desc truncate4lines">{description}</p>
      <footer>
        <div className="blogItem-author">
          <div>
            <p>{createdAt}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogItem;
