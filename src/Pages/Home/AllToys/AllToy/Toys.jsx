/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { faArrowAltCircleDown, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router-dom";

const Toys = ({ toy }) => {
  const {
    name,
    _id,
    price,
    rating,
    available_quantity,
    description,
    image_url,
    subcategory,
    seller_name,
  } = toy || {};
  return (
    <div className="card w-full h-full bg-base-100 shadow-xl mt-8">
      <figure>
        <img className="h-72 hover:transform hover:scale-110 transition duration-700 ease-in-out" src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title mb-3">
          {name}
          <div className="badge badge-secondary bg-[#f06d4f]">{subcategory}</div>
        </h2>
        <div className="flex mb-3">
          <div className="rating rating-sm flex items-center">
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
          {/* The button to open modal */}
          <h4 className="text-lg font-normal">Seller: {seller_name}</h4>
          <Link to={`/toydetails/${_id}`}>
          <button className=" text-[#f06d4f]">
          <FontAwesomeIcon className="text-2xl font-bold " icon={faArrowRight} />
          </button>

          </Link>
         
        </div>
      </div>
    </div>
  );
};

export default Toys;
