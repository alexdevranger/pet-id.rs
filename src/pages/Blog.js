import React, { useState } from "react";
import EmptyList from "../components/EmptyList";
import BlogList from "../components/BlogList";
import SearchBar from "../components/SearchBar";
import { blogList } from "../config/datanew";
import bg from "../assets/bg.webp";

const Blog = () => {
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState("");
  const [iskljuci, setIskljuci] = useState(false);

  const [value, setValue] = useState("");

  const handleClick = (value) => {
    setValue(value);
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(value.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
    setIskljuci(true);
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
    setIskljuci(false);
  };
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no repeat",
        backgroundSize: "100%",
        minHeight: "85vh",
      }}
    >
      <div className="flex flex-col text-center w-full pt-12">
        <h1 className="text-5xl sm:text-6xl font-bold pb-8 mt-12 sm:mt-0 text-center text-[#FF553E]">
          Blog
        </h1>
      </div>
      {/* Search Bar */}
      <div className="w-full blog-subCategory">
        <div>
          <input
            type="button"
            className="chip cursor-pointer"
            value="zdravlje"
            onClick={() => handleClick("zdravlje")}
          />
        </div>
        <div>
          <input
            type="button"
            className="chip cursor-pointer"
            value="higijena"
            onClick={() => handleClick("higijena")}
          />
        </div>
        <div>
          <input
            type="button"
            className="chip cursor-pointer"
            value="putovanja"
            onClick={() => handleClick("putovanja")}
          />
        </div>
        <div>
          <input
            type="button"
            className="chip cursor-pointer"
            value="zabava"
            onClick={() => handleClick("zabava")}
          />
        </div>
        <div>
          <input
            type="button"
            className="chip cursor-pointer"
            value="trening"
            onClick={() => handleClick("trening")}
          />
        </div>
        <div>
          <input
            type="button"
            className="chip cursor-pointer"
            value="ishrana"
            onClick={() => handleClick("ishrana")}
          />
        </div>
        <div>
          <input
            type="button"
            className="chip cursor-pointer"
            value="razno"
            onClick={() => handleClick("razno")}
          />
        </div>
        <div>
          <input
            type="button"
            className="chip cursor-pointer"
            value="zanimljivosti"
            onClick={() => handleClick("zanimljivosti")}
          />
        </div>
        {/* <SearchBar
          value={searchKey}
          clearSearch={handleClearSearch}
          formSubmit={handleSearchBar}
          handleSearchKey={(e) => setSearchKey(e.target.value)}
        /> */}
      </div>

      {iskljuci && (
        <div className="flex justify-center items-center pt-5">
          <button
            className="hover:text-[#FF553E] text-white hover:bg-white bg-[#FF553E] focus:outline-none font-medium rounded-lg text-sm px-4 py-2 border border-slate-200 dark:bg-white dark:hover:bg-[#3BC77E]"
            onClick={handleClearSearch}
          >
            Isključi filter
          </button>
        </div>
      )}
      {/* Blog List & Empty View */}
      <div className="pt-2">
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
