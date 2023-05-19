/* eslint-disable react/prop-types */

const Toys = ({ toy }) => {
  const {
    name,
    price,
    rating,
    available_quantity,
    description,
    image_url,
    subcategory,
    seller_name,
  } = toy;
  return (
    <div className="card w-full h-full bg-base-100 shadow-xl mt-8">
      <figure>
        <img className="h-72" src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">{subcategory}</div>
        </h2>
        <div className="flex">
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

        <div className="card-actions -mb-6 justify-end">
          <button className="btn btn-accent text-white">Details</button>
        </div>
      </div>
    </div>
  );
};

export default Toys;
