import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import SingleMyToy from "./SingleMyToy";
import { Link } from "react-router-dom";

const MyToy = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch(`https://toys-zone-server-kappa.vercel.app/mytoy/${user?.email}`)
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

        {toys.length === 0 ? (
          <div className="text-center text-lg text-gray-600">
            <p>You don&apos;t have any toys in the database.</p>
            <p>Want to add your own toy?</p>
            <div className="mt-4"> 
            <Link
              to="/addtoy" // Link to the add toy page or form
              className="py-2 px-4 bg-[#f06d4f] text-white rounded-md hover:bg-[#f06d4f]/90"
            >
              Add Your Toy
            </Link>
            </div>
          </div>
        ) : (
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
        )}
      </div>
    </div>
  );
};

export default MyToy;
