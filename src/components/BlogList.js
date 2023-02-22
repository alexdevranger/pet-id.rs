import React, { useState, useEffect, useRef } from "react";
import BlogItem from "./BlogItem";

const BlogList = (props) => {
  const { blogs, klik } = props;

  const handleClick = (value) => {
    klik(value);
  };
  return (
    <div className="w-full flex justify-center">
      <div className="w-full lg:w-[70%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <BlogItem
            blog={blog}
            key={blog.id}
            value="Hello World"
            klik={handleClick}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
