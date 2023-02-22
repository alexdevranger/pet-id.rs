import React, { useState, useEffect, useRef } from "react";
import BlogItem from "./BlogItem";

const BlogList = (props) => {
  const { blogs, onClick } = props;
  console.log(typeof onClick);
  return (
    <div className="w-full flex justify-center">
      <div className="w-full lg:w-[70%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <BlogItem blog={blog} key={blog.id} onClick={onClick} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
