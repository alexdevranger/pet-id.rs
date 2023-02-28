import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { blogList } from "../config/datanew";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Chip from "../components/Chip";
import EmptyList from "../components/EmptyList";
import { Link } from "react-router-dom";
import bg from "../assets/bg.webp";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === parseInt(id));
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
        minHeight: "85vh",
      }}
    >
      {blog ? (
        <div className="flex flex-col xl:flex-row">
          <div className="m-auto pt-32 xl:pt-0">
            <LazyLoadImage
              effect="blur"
              src={blog.cover}
              className="w-full md:w-[700px] lg:w-[750px]"
              loading="lazy"
              decoding="async"
              alt="cover"
            />
            {/* <img
              src={blog.cover}
              alt="cover"
              className="w-full md:w-[700px] lg:w-[750px]"
            /> */}
            <div className="flex flex-col min-[450px]:flex-row items-center justify-between">
              <p className="blog-date">Published {blog.createdAt}</p>
              <div className="blog-subCategory">
                {blog.subCategory.map((category, i) => (
                  <div key={i}>
                    <Chip label={category} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full lg:w-full xl:w-[50%] xl:px-6 2xl:pr-48 pt-20 xl:pt-32">
            <h1 className="text-4xl font-bold text-center">{blog.title}</h1>
            <p className="blog-desc text-[17px]">{blog.description}</p>
            <div className="sm:px-8 flex justify-center">
              <Link to="/blog">
                <div className="flex items-center justify-center text-white bg-[#3BC77E] w-[300px] h-[64px] rounded-lg mt-16 mb-16">
                  <h2 className="text-[1.75rem]">Nazad</h2>
                </div>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <EmptyList />
      )}
    </div>
  );
};

export default BlogDetail;
