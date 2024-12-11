import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  const [visibleImages, setVisibleImages] = useState(5);

  useEffect(() => {
    fetch("gallery.json")
      .then((res) => res.json())
      .then((data) => setGallery(data));
  }, []);

  const handleShowMore = () => {
    setVisibleImages(gallery.length); 
  };

  return (
    <div className="mt-12 px-4 md:px-24">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Gallery: Curious Collectibles
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {gallery.slice(0, visibleImages).map((img, index) => (
          <motion.div
            key={img.id}
            className="relative overflow-hidden rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }}  
            exit={{ opacity: 0, y: -50 }}   
            transition={{ duration: 0.6 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)", 
              opacity: 0.9, 
              rotate: 360, 
              transition: { duration: 0.6 }, 
            }}
          >
            <img
              className="w-full h-full object-cover rounded-lg transition-all duration-300"
              src={img.image_url}
              alt={img.title}
              loading="lazy" 
            />
            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-80 transition-all duration-300">
              <div className="text-center text-white p-4 absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4 opacity-0 hover:opacity-100 transition-all duration-300">
                <h2 className="text-2xl font-bold mb-2">{img.title}</h2>
                <p className="text-lg">{img.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* See More Button */}
      {visibleImages < gallery.length && (
        <div className="text-center mt-8">
          <button
            onClick={handleShowMore}
            className="bg-[#37cdbe] px-6 py-2 text-white font-semibold rounded-md hover:bg-[#30b1a2] transition-all duration-300"
          >
            See More
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
