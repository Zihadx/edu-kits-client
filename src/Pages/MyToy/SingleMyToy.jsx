/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const SingleMyToy = ({ toy, toys, setToys }) => {
  const {
    _id,
    name,
    seller_name,
    rating,
    price,
    available_quantity,
    subcategory,
    image_url,
  } = toy;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toys-zone-server-kappa.vercel.app/toys/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Toy has been deleted.", "success");
              const remaining = toys.filter((toy) => toy._id !== _id);
              setToys(remaining);
            }
          });
      }
    });
  };

  return (
    <>
      <tr>
        <td>
          <div className="flex items-center space-x-3 w-20">
            <div className="avatar">
              <div className="mask rounded-md w-16 h-16">
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
        <td className="ps-6">{rating}</td>
        <td>
          <Link to={`/updateToy/${_id}`} className="ps-1">
            <FontAwesomeIcon className="text-lg text-accent" icon={faEdit} />
          </Link>
        </td>
        <td>
          <button onClick={() => handleDelete(_id)} className="ps-4">
            <FontAwesomeIcon className="text-lg text-error" icon={faTrash} />
          </button>
        </td>
      </tr>
    </>
  );
};

export default SingleMyToy;
