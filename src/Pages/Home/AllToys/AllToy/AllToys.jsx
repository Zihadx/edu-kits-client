import { useEffect, useState } from "react";
import Toys from "./Toys";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredToys, setFilteredToys] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    fetch(`http://localhost:5000/toys`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setFilteredToys(data);
        setIsLoading(false); // Set loading to false when data is fetched
      });
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  useEffect(() => {
    let filtered = toys;

    if (searchQuery) {
      filtered = filtered.filter((toy) =>
        toy.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory && selectedCategory !== "Category?") {
      filtered = filtered.filter((toy) => toy.subcategory === selectedCategory);
    }

    setFilteredToys(filtered);
  }, [searchQuery, selectedCategory, toys]);

  return (
    <div className="px-4 md:px-24 pt-20">
      <h1 className="text-5xl font-bold text-center">All Toys</h1>
      <p className="text-center mt-4">
        <small>
          Playful Minds is a company that specializes in creating educational
          toys and games
          <br /> for children.
        </small>
      </p>
      <div className="flex items-center justify-center gap-6 mt-8">
        <div>
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-full max-w-xs"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        <div>
          <select
            className="select select-bordered w-full max-w-xs"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option disabled selected>
              Category?
            </option>
            <option>Engineering kits</option>
            <option>Science Kits</option>
            <option>Math Learning</option>
          </select>
        </div>
      </div>

      {/* Show loading indicator while fetching data */}
      {isLoading ? (
        <div className="flex justify-center mt-8">
          <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-t-transparent text-blue-600" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {filteredToys.length > 0 ? (
            filteredToys.map((toy) => <Toys key={toy._id} toy={toy} />)
          ) : (
            <p className="text-center col-span-3">No toys found!</p>
          )}
        </div>
      )}
    </div>
  );
};

export default AllToys;
