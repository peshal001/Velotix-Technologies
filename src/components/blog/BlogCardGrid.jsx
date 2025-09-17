import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BlogCardGrid = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}blogs.json`)
      .then(res => res.json())
      .then(data => {
        setBlogs(data.slice(0, 3)); 
      });
  }, []);

  return (
    <div className='bg-white  '>
    <div className="max-w-8xl mx-100 px-4 py-8 ">
      <h2 className="text-4xl font-bold mb-20 text-black flex text-center ml-[35%] "> Latest Blogs & Articles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-25 w-full">
        {blogs.map(blog => (
          <div
            key={blog.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-2xl  transition duration-500 transform hover:scale-105"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover transition-transform duration-500 transform hover:scale-110"
            />
            <div className="p-2">
              <span className="text-2xl text-[#3AAFA9] font-medium">{blog.category}</span>
              <h3 className="text-xl font-semibold mt-2 mb-2 text-gray-900">{blog.title}</h3>
              <p className="text-gray-800 text-xl">{blog.summary}</p>
              <p className="text-xl text-[#3AAFA9] mt-3 font-bold">{new Date(blog.date).toDateString()}</p>
              <Link to={`/resources/blog/${blog.id}`}>
                <button className="mt-4 text-sm bg-[#3AAFA9] text-white px-4 py-2 rounded hover:[#3AAFA9] transition duration-300 transform hover:scale-105">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link to="/resources/blog">
          <button className="bg-gray-800 text-white px-6 py-3 rounded hover:bg-gray-900 transition mt-15">
            View All Blogs
          </button>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default BlogCardGrid;
