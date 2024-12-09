import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Toysection = () => {
  const [toys, setToys] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://toys-zone-server-kappa.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => setToys(data.slice(0, 4))); // Limit to 4 toys
  }, []);

  const isLoggedIn = localStorage.getItem("userToken");

  const handleDetailsClick = (toyId) => {
    if (!isLoggedIn) {
      Swal.fire({
        title: "You need to log in!",
        text: "Please log in to view more details.",
        icon: "warning",
        confirmButtonText: "Go to Login",
        confirmButtonColor: "#f06d4f",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    } else {
      navigate(`/toydetails/${toyId}`);
    }
  };

  return (
    <div className="mt-16 px-4 md:px-24">
      <h1 className="text-5xl font-bold text-center">Explore Our Toys</h1>
      <p className="text-center mt-4">
        <small>
          Browse through our amazing educational toys designed for kids!
        </small>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-8 ">
        {toys.map((toy) => (
          <div
            key={toy._id}
            className="bg-white rounded-sm shadow-lg overflow-hidden hover:shadow-2xl"
          >
            <img
              src={toy.image_url}
              alt={toy.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {toy.name}
              </h2>
              <p className="text-sm text-gray-500 mt-2">{toy.subcategory}</p>
              <p className="text-sm text-gray-600 mt-4">
                {toy.description.substring(0, 100)}...
              </p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-bold text-gray-900">
                  ${toy.price}
                </span>
                <span className="text-sm text-yellow-500">⭐ {toy.rating}</span>
              </div>
              <button
                onClick={() => handleDetailsClick(toy._id)}
                className="w-full py-2 bg-[#f06d4f] text-white rounded-md hover:bg-[#f06d4f]/90 mt-4"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link to="/alltoy">
          <button className="py-2 px-4 font-semibold bg-[#f06d4f] text-white rounded-sm hover:bg-[#f06d4f]/90">
            View All Toys
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Toysection;
