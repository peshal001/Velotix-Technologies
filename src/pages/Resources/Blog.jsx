import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

const Blog = () => {
  const [allBlogs, setAllBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const categories = [
    'All Categories',
    'Chat GPT Integration',
    'Natural Language Processing',
    'Machine Learning',
    'Computer Vision',
    'Big Data Analytics',
  ];

  useEffect(() => {
    fetch('/blogs.json')
      .then(res => res.json())
      .then(data => {
        setAllBlogs(data);
        setFilteredBlogs(data);
      });
  }, []);

  const handleSearchChange = (event) => {
    const rawInputValue = event.target.value;
    setSearchTerm(rawInputValue);
    const lowerCaseTerm = rawInputValue.toLowerCase();
    filterBlogs(lowerCaseTerm, selectedCategory);
  };

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    filterBlogs(searchTerm.toLowerCase(), category);
  };

  const filterBlogs = (search, category) => {
    const searchFiltered = allBlogs.filter(blog =>
      blog.title.toLowerCase().includes(search) ||
      blog.summary.toLowerCase().includes(search)
    );

    if (category === 'All Categories' || category === '') {
      setFilteredBlogs(searchFiltered);
    } else {
      const categoryFiltered = searchFiltered.filter(blog =>
        blog.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredBlogs(categoryFiltered);
    }
  };

  return (
    <div className="bg-white  min-h-screen">
      <Navbar />
      <div className="pt-16 sm:pt-20 lg:pt-24">
        <div className="bg-white-900 py-16 text-center">
        <h1 className="text-4xl font-extrabold text-gray-700 tracking-tight sm:text-5xl lg:text-6xl animate__animated animate__fadeIn animate__delay-1s animate__slideInUp">
  Explore Our Technology Blog
</h1>

          <div className="mt-30 flex justify-center space-x-50">
            <div className="relative rounded-md shadow-sm flex items-center">
              <input
                type="text"
                name="search"
                id="search"
                className=" p-4   focus:ring-[#3AAFA9] focus:border-[#3AAFA9] block w-full pl-5 pr-15  text-xl border-gray-300 rounded-md"
                placeholder="Search for Blogs..."
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="relative rounded-md shadow-sm">
              <select
                className="p-4   focus:ring-[#3AAFA9] focus:[#3AAFA9] block w-full pl-5 pr-15  text-xl border-gray-300 rounded-md"
                value={selectedCategory}
                onChange={handleCategoryChange}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8 mt-8 sm:mt-12 lg:mt-16">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
            {selectedCategory === 'All Categories' || selectedCategory === ''
              ? searchTerm ? `Search results for "${searchTerm}"` : 'Latest Articles'
              : searchTerm ? `Search results in "${selectedCategory}" for "${searchTerm}"` : `${selectedCategory} Blogs`}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map(blog => (
                <div
                  key={blog.id}
                  className="bg-white shadow-xl m-4 rounded-lg overflow-hidden hover:shadow-2xl transition duration-500 transform hover:scale-105"
                >
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-30 object-cover transition-transform duration-500 transform hover:scale-110"
                  />
                  <div className="p-4">
                    <span className="text-2xl text-[#3AAFA9] font-medium">
                      {blog.category}
                    </span>
                    <h3 className="text-xl font-semibold mt-2 mb-2 text-gray-900">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 text-xl tracking-wide">{blog.summary}</p>
                    <p className="text-xl text-[#3AAFA9] font-semibold mt-3">
                      {new Date(blog.date).toDateString()}
                    </p>
                    <Link to={`/resources/blog/${blog.id}`}>
                      <button className="mt-4 text-sm bg-[#3AAFA9] text-white px-4 py-2 rounded hover:bg-[#3AAFA9] transition duration-300 transform hover:scale-105">
                        Read More
                      </button>
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-8">
                <p className="text-gray-600 text-lg">
                  {searchTerm && selectedCategory && selectedCategory !== 'All Categories'
                    ? `No blogs found in the category "${selectedCategory}" matching your search term "${searchTerm}".`
                    : searchTerm
                      ? `No blogs found matching your search term "${searchTerm}".`
                      : `No blogs found in the category "${selectedCategory}".`}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
