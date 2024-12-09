const JoinUsSection = () => {
    return (
      <div className="flex items-center justify-center bg-gradient-to-r from-blue-50 via-white to-blue-50 py-12 px-6 md:px-24 shadow-xl mt-16">
        <div className="flex flex-col md:flex-row justify-between items-center w-full space-y-8 md:space-y-0">
          {/* Left Section - Image */}
          <div className="md:w-1/3">
            <img
              src="https://i.ibb.co.com/NNZvnvB/kidstoy.webp" // Replace with your image URL
              alt="Decorative Element"
              className="h-36 w-36 md:h-44 md:w-44 animate-spin-slow rounded-full"
            />
          </div>
  
          {/* Center Section - Text */}
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800">
              Join our newsletter and get
            </h2>
            <p className="text-lg md:text-xl text-orange-600 font-semibold">
              80৳ discount for your first order
            </p>
            <p className="text-sm md:text-base text-gray-500">
              Stay updated with our latest deals and offers delivered directly to
              your inbox!
            </p>
          </div>
  
          {/* Right Section - Form */}
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email..."
              className="flex-grow border border-gray-300 p-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button className="bg-orange-500 text-white font-semibold p-3 rounded-r-lg hover:bg-orange-600 transition duration-300">
              Subscribe →
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default JoinUsSection;
  