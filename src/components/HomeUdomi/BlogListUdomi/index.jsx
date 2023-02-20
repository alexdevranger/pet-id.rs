import React from 'react';
import BlogItem from './BlogItem';
import './styles.css';

const BlogList = ({ blogs }) => {
  return (
    <div className='w-full flex justify-center'>
      <div className='w-full lg:w-[70%] xl:w-[90%] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
        {blogs.map((blog) => (
          <BlogItem blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;