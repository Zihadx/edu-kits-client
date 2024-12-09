/* eslint-disable react/prop-types */
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import { AuthContext } from "../../../../Providers/AuthProviders";

const Toys = ({ toy }) => {
  const {
    name,
    _id,
    price,
    rating,
    image_url,
    subcategory,
    seller_name,
  } = toy || {};

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    if (!user) {
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
      navigate(`/toydetails/${_id}`);
    }
  };

  return (
    <div className="card w-full h-full bg-base-100 shadow-xl mt-8 rounded-md">
      <figure>
        <img
          className="h-72 hover:transform hover:scale-110 transition duration-700 ease-in-out"
          src={image_url}
          alt="Toy"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title mb-3">
          {name}
          <div className="badge badge-secondary bg-[#f06d4f]">{subcategory}</div>
        </h2>
        <div className="flex mb-3">
          <div className="rating rating-sm flex items-center">
            {/* Rating stars */}
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
            <p className="ml-2">{rating}</p>
          </div>
          <p className="flex justify-end">Price: ${price}</p>
        </div>

        <div className="card-actions -mb-6 justify-between items-center">
          <h4 className="text-lg font-normal">Seller: {seller_name}</h4>
          <button onClick={handleDetailsClick}>
            <FontAwesomeIcon className="text-2xl font-bold text-[#f06d4f]" icon={faArrowRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toys;
