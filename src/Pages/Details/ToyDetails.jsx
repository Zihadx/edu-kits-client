import { useEffect, useState } from "react";
import { useParams, useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";

const ToyDetails = () => {
  const { id } = useParams();
  const toyDetails = useLoaderData();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    if (toyDetails && id) {
      const toy = toyDetails.find((toy) => toy._id === id);
      setDetails(toy);
    }
  }, [toyDetails, id]);

  if (!details) return <div className="flex justify-center items-center mt-32">Loading...</div>;

  const {
    name,
    price,
    rating,
    available_quantity,
    description,
    image_url,
    subcategory,
    seller_name,
  } = details;

  return (
    <div className="min-h-screen py-20">
      {/* Main Container */}
      <div className="container mx-auto px-6 md:px-24">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-12">
          {/* Toy Image Section */}
          <div className="flex-1 overflow-hidden rounded-xl shadow-xl hover:translate-x-3 transition-all duration-300">
            <motion.img
              className="w-full h-full object-cover rounded-xl"
              src={image_url}
              alt={name}
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
          </div>

          {/* Toy Info Section */}
          <div className="flex-1">
            <h1 className="text-4xl lg:text-5xl font-bold text-gradient text-center lg:text-left mb-6">
              {name}
            </h1>
            <p className="text-lg text-gray-700 text-center lg:text-left mb-6">{description}</p>

            <div className="flex justify-center lg:justify-start gap-6 mb-6">
              {/* Rating Section */}
              <div className="flex items-center gap-2 text-yellow-400">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className={`w-6 h-6 ${index < rating ? "fill-current" : "fill-gray-300"}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 17.75l-6.09 3.19L7.27 13 2 8.62l7.19-.62L12 2l3.81 6.38 7.19.62-5.27 4.38 1.36 7.34L12 17.75z"></path>
                  </svg>
                ))}
                <span className="text-xl font-semibold">{rating}</span>
              </div>

              {/* Price & Quantity Section */}
              <div className="text-lg text-gray-800 font-semibold">
                <p className="mb-1">Price: ${price}</p>
                <p className="mb-1">Available: {available_quantity}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Seller & Category Section */}
        <div className="bg-gradient-to-r from-[#f06d4f] to-blue-500 p-8 rounded-lg shadow-lg text-white mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center">
            <div>
              <h2 className="text-2xl font-semibold">Seller</h2>
              <p>{seller_name}</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">Category</h2>
              <p>{subcategory}</p>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-[#f06d4f] to-pink-500 text-white py-3 px-8 rounded-full text-lg font-bold shadow-xl hover:bg-opacity-80 transition-all duration-300">
            Add to Cart
          </button>
        </div>
      </div>

      <div className="bg-gray-200 py-12 px-24 mt-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Why Choose This Toy?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            This educational toy is designed to promote creative thinking, problem-solving, and hands-on learning. It&apos;s perfect for kids to learn and play while enhancing their cognitive abilities.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="p-6 bg-white rounded-xl shadow-lg hover:scale-95 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Enhances Creativity</h3>
              <p className="text-gray-600">Fosters creativity through hands-on play and problem-solving activities.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg hover:scale-95 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Educational Benefits</h3>
              <p className="text-gray-600">Teaches valuable skills such as engineering, science, and mathematics in an engaging way.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg hover:scale-95 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Safe & Fun</h3>
              <p className="text-gray-600">Made with child-safe materials to ensure hours of fun and learning.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
