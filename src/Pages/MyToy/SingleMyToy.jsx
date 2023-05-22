/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

const SingleMyToy = ({ toy }) => {
  const {
    name,
    seller_name,
    email,
    rating,
    price,
    available_quantity,
    subcategory,
    image_url,
  } = toy;
  return (
    <>
      <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={image_url} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
              <div className="text-sm text-[#f06d4f]">{subcategory}</div>
            </div>
          </div>
        </td>

        <td>{seller_name}</td>
        <td>{price}</td>
        <td>{available_quantity}</td>
        <td>{email}</td>
        <td>{rating}</td>
        <td>
          <FontAwesomeIcon className="text-lg text-accent" icon={faEdit} />
        </td>
        <td>
          <FontAwesomeIcon className="text-lg text-error" icon={faTrash} />
        </td>
      </tr>
    </>
  );
};

export default SingleMyToy;
