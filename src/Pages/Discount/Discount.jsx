import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Discount = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2024-12-31T23:59:59"); 
    const currentDate = new Date();
    const difference = targetDate - currentDate;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup timer on component unmount
  }, []);

  return (
    <div className="mt-12">
      <motion.div
        className="hero h-[540px] relative"
        style={{
          backgroundImage: `url("https://i.ibb.co/GpjWhrk/katie-emslie-B2-qpg-Jm9-Y-unsplash.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="hero-overlay bg-[#e9a090] bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <motion.div
            className="text-black relative z-10"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.h1
              className="mb-5 text-5xl font-bold text-white drop-shadow-lg"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              15% Discount <br /> On All Kids Education Toys
            </motion.h1>
            <p className="mb-5 text-lg text-white">Offer Expires In</p>

            {/* Countdown Timer */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8 text-center">
              <motion.div
                className="flex flex-col p-4 bg-[#eb4d2a] rounded-md text-neutral-content justify-center items-center transform hover:scale-105 transition-all duration-300 shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": timeLeft.days }}></span>
                </span>
                <span className="text-white text-lg">Days</span>
              </motion.div>

              <motion.div
                className="flex flex-col p-4 bg-[#eb4d2a] rounded-md text-neutral-content justify-center items-center transform hover:scale-105 transition-all duration-300 shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": timeLeft.hours }}></span>
                </span>
                <span className="text-white text-lg">Hours</span>
              </motion.div>

              <motion.div
                className="flex flex-col p-4 bg-[#eb4d2a] rounded-md text-neutral-content justify-center items-center transform hover:scale-105 transition-all duration-300 shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
              >
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": timeLeft.minutes }}></span>
                </span>
                <span className="text-white text-lg">Minutes</span>
              </motion.div>

              <motion.div
                className="flex flex-col p-4 bg-[#eb4d2a] rounded-md text-neutral-content justify-center items-center transform hover:scale-105 transition-all duration-300 shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": timeLeft.seconds }}></span>
                </span>
                <span className="text-white text-lg">Seconds</span>
              </motion.div>
            </div>

            <motion.button
              className="btn btn-accent text-white mt-8 py-3 px-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              Shop Now
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Discount;
