import { useState, useEffect } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  // Mock Blog Data
  const blogData = [
    {
      _id: "1",
      title: "The Importance of Educational Toys for Kids",
      description:
        "Educational toys are not just for play. They help children develop important skills such as problem-solving, creativity, and motor skills.",
      image_url:
        "https://i.ibb.co/NNZvnvB/kidstoy.webp",
    },
    {
      _id: "2",
      title: "How to Choose the Right Toy for Your Child",
      description:
        "With so many options out there, choosing the right toy for your child can be overwhelming. Here are some tips on making the right choice based on age and development.",
      image_url:
        "https://i.ibb.co/NNZvnvB/kidstoy.webp",
    },
    {
      _id: "3",
      title: "Building a STEM Learning Environment at Home",
      description:
        "Learn how to create a fun and educational environment for your child using STEM toys that foster learning in science, technology, engineering, and math.",
      image_url:
        "https://i.ibb.co/NNZvnvB/kidstoy.webp",
    },
  ];

  // Set blogs state to mock data
  useEffect(() => {
    setBlogs(blogData);
  }, []);

  return (
    <div className="mt-16">
      <div className="container mx-auto px-6 md:px-24 text-center">
        <h2 className="text-4xl font-semibold mb-6 text-gray-800">
          Latest Blogs
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Stay updated with the latest news and insights from our world of
          educational toys and games.
        </p>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="group relative bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="w-full h-60 bg-gray-200 overflow-hidden relative rounded-t-3xl">
                <img
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:opacity-80"
                  src={blog.image_url}
                  alt={blog.title}
                />
              </div>

              {/* Content with Gradient Effect */}
              <div className="p-6 space-y-4 relative group-hover:bg-gradient-to-t group-hover:from-transparent group-hover:to-[#37cdbe] group-hover:opacity-90 transition-all duration-500">
                <h3 className="text-2xl font-semibold text-gray-800 transition-all duration-300">
                  {blog.title}
                </h3>
                <p className="text-gray-700 text-base transition-all duration-300">
                  {blog.description}
                </p>
                <div className="mt-6">
                  <a
                    href={`/blog/${blog._id}`}
                    className="inline-block py-3 px-8 bg-[#37cdbe] text-white rounded-lg text-lg font-medium transition-all duration-300 transform group-hover:scale-105 hover:shadow-xl"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
