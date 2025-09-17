import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from "../components/navbar/Navbar"
import Footer from "../components/footer/Footer"

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/blogs.json");
        if (!res.ok) {
          throw new Error('Failed to fetch blog data');
        }
        const data = await res.json();
        setBlogs(data);
        setLoading(false);

        const selectedBlog = data.find((b) => b.id === id);
        setBlog(selectedBlog);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [id]);

  const handleTopicClick = (topic) => {
    const selectedBlog = blogs.find((b) => b.category === topic);
    setBlog(selectedBlog);
  };

  if (loading) {
    return <div className="text-center text-xl text-gray-700 animate-pulse">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-xl text-red-500">{error}</div>;
  }

  if (!blog) {
    return <div className="text-center text-xl text-gray-700">Blog not found</div>;
  }

  // eslint-disable-next-line no-unused-vars
  const renderContent = (content) => {
    if (typeof content === 'string' || typeof content === 'number') {
      return <p className="text-gray-600 mb-2">{content}</p>;
    } else if (Array.isArray(content)) {
      return (
        <ul className="list-disc list-inside text-gray-600 mb-2">
          {content.map((item, index) => (
            <li key={index}>{renderContent(item)}</li>
          ))}
        </ul>
      );
    } else if (typeof content === 'object' && content !== null) {
      return (
        <div className="ml-4">
          {Object.entries(content).map(([key, value]) => (
            <div key={key} className="mb-2">
              <h5 className="font-semibold capitalize text-gray-700">{key.replace(/_/g, ' ')}:</h5>
              {renderContent(value)}
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <>
    <Navbar/>
    <div className="max-w-7xl mx-auto px-6 py-12 bg-gray-10 mt-30">
      <div className="mb-6">
        <Link
          to="/resources/blog"
          className="inline-block py-2 px-6 text-sm font-semibold text-white bg-[#3AAFA9] hover:bg-[#2a8e8b] rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
        >
          &larr; Back to Blogs
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
    
        <div className="lg:col-span-3 space-y-8">
     
          <div className="bg-white rounded-lg shadow-md p-6">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-96 object-cover rounded-t-lg mb-6 shadow-sm"
            />
            <h2 className="text-3xl font-bold text-gray-900 mb-3">{blog.title}</h2>
            <p className="text-gray-700 text-lg leading-relaxed">{blog.summary}</p>
          </div>

          {blog.pages && blog.pages.map((page) => (
            <div key={`page-${page.page_number}`} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Page {page.page_number}</h3>
              {page.content && Object.entries(page.content).map(([key, value]) => (
                <div key={key} className="mb-5">
                  <h4 className="text-xl font-semibold capitalize text-gray-700 mb-2">{key.replace(/_/g, ' ')}</h4>
                  {typeof value === 'string' || typeof value === 'number' ? (
                    <p className="text-gray-600 leading-relaxed">{value}</p>
                  ) : Array.isArray(value) ? (
                    <ul className="list-disc list-inside text-gray-600 leading-relaxed">
                      {value.map((item, index) => (
                        <li key={index}>
                          {typeof item === 'object' && item !== null ? (
                            <ul>
                              {Object.entries(item).map(([subKey, subValue]) => (
                                <li key={subKey} className="ml-4">
                                  <span className="font-medium capitalize text-gray-700">{subKey.replace(/_/g, ' ')}:</span>
                                  <span className="text-gray-600 leading-relaxed">{subValue}</span>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <span className="text-gray-600 leading-relaxed">{item}</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  ) : typeof value === 'object' && value !== null ? (
                    <div className="ml-4">
                      {Object.entries(value).map(([objKey, objValue]) => (
                        <div key={objKey} className="mb-2">
                          <span className="font-medium capitalize text-gray-700">{objKey.replace(/_/g, ' ')}:</span>
                          <span className="text-gray-600 leading-relaxed">{objValue}</span>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          ))}
        </div>
   

        <div className="lg:col-span-1">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Topics</h3>
            <ul className="space-y-3">
              {Array.isArray(blogs) && blogs.length > 0 ? (
                blogs.map((blogItem) => (
                  <li key={blogItem.id}>
                    <button
                      onClick={() => handleTopicClick(blogItem.category)}
                      className="flex flex-col items-start bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md p-4 transition duration-300 ease-in-out w-full"
                    >
                      <div className="flex items-center w-full mb-1">
                        {blogItem.image && (
                          <img
                            src={blogItem.image}
                            alt={blogItem.category}
                            className="w-10 h-10 rounded-full mr-3 object-cover flex-shrink-0"
                          />
                        )}
                        <span className="text-sm font-semibold">{blogItem.category}</span>
                      </div>
                      {blogItem.description && (
                        <p className="text-xs text-gray-600 line-clamp-2">{blogItem.description}</p>
                      )}
                    </button>
                  </li>
                ))
              ) : (
                <li>No topics available</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default BlogDetail;