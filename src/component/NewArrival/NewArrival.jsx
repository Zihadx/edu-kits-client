import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const NewArrival = () => {
  const [newArrivals, setNewArrivals] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Initialize Firebase Auth
  const auth = getAuth();

  useEffect(() => {
    // Check Firebase Authentication state
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });

    // Fetch toy data
    fetch("https://toys-zone-server-kappa.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => setNewArrivals(data));
  }, [auth]);

  const handleDetailsClick = (toyId) => {
    if (!isLoggedIn) {
      // Show SweetAlert if not logged in
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
    <div className="mt-16">
      <div className="mx-auto px-6 md:px-24 text-center">
        <h2 className="text-4xl font-extrabold mb-6">New Arrivals</h2>
        <p className="text-lg text-gray-600 mb-12">
          Check out our latest educational toys and games for children!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newArrivals.slice(4, 8).map((toy) => (
            <div
              key={toy._id}
              className="flex bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-95"
            >
              <div className="w-1/3">
                <img
                  className="h-full w-full object-cover rounded-lg"
                  src={toy.image_url}
                  alt={toy.name}
                />
              </div>

              <div className="w-2/3 pl-6 flex flex-col justify-between">
                <h3 className="text-xl font-bold">{toy.name}</h3>
                <p className="text-md text-gray-600 mt-2">{toy.subcategory}</p>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-xl font-semibold">${toy.price}</p>
                  <button
                    onClick={() => handleDetailsClick(toy._id)}
                    className="text-sm text-blue-500 hover:underline"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
