import { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import framer-motion
import image1 from "../../../assets/Banner/banner1.jpg";
import image2 from "../../../assets/Banner/banner2.jpg";
import image3 from "../../../assets/Banner/banner3.jpg";
import image4 from "../../../assets/Banner/banner4.jpg";

const slides = [
  {
    id: 1,
    image: image4,
    gradient: "from-[#FFD700] to-[rgba(255,255,255,0)]",
    title: "Build Memories, One Toy at a Time!",
    description: "Our collection is designed to bring smiles and cherished moments.",
    buttonText: "View Collection!",
    buttonStyle: "bg-yellow-400 text-black px-4 py-2",
  },
  {
    id: 2,
    image: image2,
    gradient: "from-[#FFD700]/50 to-[rgba(255,255,255,0)]",
    title: "Fun & Learning Combined!",
    description: "Unleash creativity and imagination with our fun educational toys.",
    buttonText: "Explore Now!",
    buttonStyle: "bg-yellow-400 text-black px-4 py-2",
  },
  {
    id: 3,
    image: image3,
    gradient: "from-[#FF6F61] to-[rgba(255,255,255,0)]",
    title: "Toys for Every Adventure!",
    description: "From action figures to soft plushies—find your perfect toy today.",
    buttonText: "Browse Now!",
    buttonStyle: "bg-[#f06d4f] px-4 py-2 text-white",
  },
  {
    id: 4,
    image: image1,
    gradient: "from-[#FF6F61]/50 to-[rgba(255,255,255,0)]",
    title: "Spark Joy with Endless Toys!",
    description: "Explore the magic of playtime with our curated toy collections for kids of all ages.",
    buttonText: "Shop Now!",
    buttonStyle: "bg-[#f06d4f] px-4 py-2 text-white",
  },
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (e) => {
    setStartX(e.clientX);
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startX;

    if (deltaX > 50) {
      setIsDragging(false);
      handlePrevSlide();
    } else if (deltaX < -50) {
      setIsDragging(false);
      handleNextSlide();
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handlePrevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(handleNextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="carousel w-full h-[400px] md:h-[640px] relative "
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`carousel-item relative w-full ${
            index === currentIndex ? "block" : "hidden"
          }`}
        >
          <motion.img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />

          <div
            className={`absolute inset-0 bg-gradient-to-r ${slide.gradient} opacity-80`}
          ></div>

          <motion.div
            className="absolute flex items-center h-full left-0 right-0 top-0 px-8 md:px-24 md:w-1/2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{
              duration: 1,
              delay: 0.2, 
            }}
          >
            <div className="space-y-6">
              <motion.h1
                className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 50, opacity: 0 }}
                transition={{ duration: 0.8 }}
              >
                {slide.title}
              </motion.h1>
              <motion.p
                className="text-md font-semibold text-white"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 50, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {slide.description}
              </motion.p>
              <motion.button
                className={`${slide.buttonStyle} font-bold shadow-lg hover:scale-105 transform transition rounded-sm`}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                {slide.buttonText}
              </motion.button>
            </div>
          </motion.div>

          <div className="absolute flex justify-between w-full transform -translate-y-1/2 top-1/2 px-8">
            <button
              onClick={handlePrevSlide}
              className="p-2 rounded-full h-10 w-10 flex justify-center items-center bg-gray-900 bg-opacity-60 text-white font-semibold shadow-md hover:bg-slate-600"
            >
              ❮
            </button>
            <button
              onClick={handleNextSlide}
              className="p-2 rounded-full h-10 w-10 flex justify-center items-center bg-gray-900 bg-opacity-60 text-white font-semibold shadow-md hover:bg-slate-600"
            >
              ❯
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;
