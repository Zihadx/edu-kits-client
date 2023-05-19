/* eslint-disable no-unused-vars */
import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ToyDetails = () => {
  const { id } = useParams();
  const toyDetails = useLoaderData();
  const [details, setDetails] = useState([]);
  useEffect(() => {
    const data = toyDetails.find((toy) => toy._id == id);
    setDetails(data);
  }, []);
  console.log(data);
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
  } = details;
  return (
    <div className="bg-slate-100 mx-4 md:mx-24 py-8 px-4 md:px-12 rounded-lg">
      <h1 className="text-5xl font-bold text-center">
        Toy Details: <span className="text-accent">{name}</span>
      </h1>
      <div className="text-center">
        <img
          className="h-[400px] w-[800px] mx-auto mt-8 rounded-lg"
          src={image_url}
          alt=""
        />
        <p className="mt-4 w-2/3 mx-auto">{description}</p>
      </div>

      <div className="rating rating-sm flex justify-center items-center mt-4">
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

      <div>
        <div className="text-center space-y-3 mt-4">
          <h1 className="text-3xl font-semibold">Seller: {seller_name}</h1>
          <p className="text-2xl font-medium">{subcategory}</p>
          <p>Price: ${price}</p>
          <p>Quantity: {available_quantity}</p>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
