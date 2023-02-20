import React, { useState } from 'react';
import EmptyList from '../../components/common/EmptyList';
import BlogList from '../../components/Home/BlogList';
import SearchBar from '../../components/Home/SearchBar';
import { blogList } from '../../config/data';
import bg from "../../assets/bg.webp";

const Home = () => {
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState('');

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
    setSearchKey('');
  };

  return (
    <div 
    style={{
      backgroundImage: `url(${bg})`,
      backgroundRepeat: "no repeat",
      backgroundSize: "100%",
    }}>
      

      {/* Search Bar */}
      <div className='w-full flex'>
        <SearchBar
          value={searchKey}
          clearSearch={handleClearSearch}
          formSubmit={handleSearchBar}
          handleSearchKey={(e) => setSearchKey(e.target.value)}
        />
      </div>

      {/* Blog List & Empty View */}
      <div className='pt-20'>
        {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
      </div>
    </div>
  );
};

export default Home;