import React, { useState } from "react";
import EmptyList from "../components/EmptyList";
import BlogList from "../components/BlogList";
import SearchBar from "../components/SearchBar";
import { blogList } from "../config/datanew";
import bg from "../assets/bg.webp";

const Blog = () => {
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState("");

  const [value, setValue] = useState("");

  const handleClick = (value) => {
    setValue(value);
  };

  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  // Search for blog by category
  const handleSearchResults = () => {
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  // Clear search and show all blogs
  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchKey("");
  };
  console.log(typeof onClick);
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no repeat",
        backgroundSize: "100%",
      }}
    >
      <div className="flex flex-col text-center w-full pt-12">
        <h1 className="text-5xl sm:text-6xl font-bold pb-8 mt-12 sm:mt-0 text-center text-[#FF553E]">
          Blog
        </h1>
      </div>
      {/* Search Bar */}
      <div className="w-full flex">
        <SearchBar
          value={searchKey}
          clearSearch={handleClearSearch}
          formSubmit={handleSearchBar}
          handleSearchKey={(e) => setSearchKey(e.target.value)}
        />
      </div>

      {/* Blog List & Empty View */}
      <div className="pt-20">
        {!blogs.length ? (
          <EmptyList />
        ) : (
          <BlogList blogs={blogs} onClick={handleClick} />
        )}
        {/* Value is: {value} */}
      </div>
    </div>
  );
};

export default Blog;
