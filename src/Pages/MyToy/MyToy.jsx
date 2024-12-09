import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import SingleMyToy from "./SingleMyToy";

const MyToy = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/mytoy/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [user]);
  return (
    <div className="pt-20">
      <div className="px-4 md:px-12 lg:px-24">
      <h1 className="text-5xl font-bold uppercase text-center my-8">
        My Toys
      </h1>

      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Title</th>
              <th>Seller</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Rating</th>
              <th>Edit</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {toys.map((toy) => (
              <SingleMyToy
                key={toy._id}
                toy={toy}
                toys={toys}
                setToys={setToys}
              ></SingleMyToy>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </div>
  );
};

export default MyToy;
