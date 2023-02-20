import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { blogListUdomi } from '../../configUdomi/data1';
import ChipUdomi from '../../components/commonUdomi/ChipUdomi';
import EmptyListUdomi from '../../components/commonUdomi/EmptyListUdomi';
import './styles.css';
import { Link } from 'react-router-dom';
import bg from "../../assets/bg.webp";

const BlogUdomi = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = blogListUdomi.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  }, []);

  return (
    <div
    style={{
      backgroundImage: `url(${bg})`,
      backgroundRepeat: "no repeat",
      backgroundSize: "100%",
    }}>
      
      {blog ? (
        <div className='blog-wrap'>
          <div className='flex flex-col min-[450px]:flex-row items-center justify-between'>
            <p className='blog-date'>Published {blog.createdAt}</p>
            <div className='blog-subCategory'>
              {blog.subCategory.map((category, i) => (
                <div key={i}>
                  <ChipUdomi label={category} />
                </div>
              ))}
            </div>
          </div>
          <img src={blog.cover} alt='cover' />
          <h2 className='text-center text-4xl font-bold'>{blog.ime}</h2>
          <h2 className='text-center text-2xl font-bold'>{blog.title}</h2>
          <p className='blog-desc text-lg'>{blog.description}</p>
          <div className="px-8 flex justify-center">
            <div className="flex items-center justify-center text-white bg-[#3BC77E] w-full sm:w-[300px] h-[64px] rounded-lg mt-16 mb-16">
              <Link to="/udomi">
                <h2 className="text-[1.75rem]">Nazad</h2>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <EmptyListUdomi />
      )}
    </div>
  );
};

export default BlogUdomi;