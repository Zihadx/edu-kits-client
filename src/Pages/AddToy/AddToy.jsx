import { useState } from "react";
import Swal from "sweetalert2";

const AddToy = () => {
  const [formData, setFormData] = useState({
    name: "",
    seller_name: "",
    email: "",
    rating: "",
    price: "",
    available_quantity: "",
    subcategory: "",
    image_url: "",
    description: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevState) => ({
          ...prevState,
          image_url: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.seller_name)
      newErrors.seller_name = "Seller name is required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required";
    if (
      !formData.rating ||
      isNaN(formData.rating) ||
      formData.rating < 1 ||
      formData.rating > 5
    )
      newErrors.rating = "Rating must be a number between 1 and 5";
    if (!formData.price || isNaN(formData.price) || formData.price <= 0)
      newErrors.price = "Price must be a valid number greater than 0";
    if (
      !formData.available_quantity ||
      isNaN(formData.available_quantity) ||
      formData.available_quantity <= 0
    )
      newErrors.available_quantity =
        "Quantity must be a valid number greater than 0";
    if (!formData.subcategory)
      newErrors.subcategory = "Subcategory is required";
    if (!formData.image_url) newErrors.image_url = "Image is required";
    if (!formData.description)
      newErrors.description = "Description is required";

    return newErrors;
  };

  const handleAddToy = (event) => {
    event.preventDefault();

    const errors = validate();
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      const addNewToy = { ...formData };
      console.log(addNewToy);

      fetch("https://toys-zone-server-kappa.vercel.app/toys", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(addNewToy),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              title: "Success!",
              text: "Toy added successfully",
              icon: "success",
              confirmButtonText: "Ok",
            });
            setFormData({
              name: "",
              seller_name: "",
              email: "",
              rating: "",
              price: "",
              available_quantity: "",
              subcategory: "",
              image_url: "",
              description: "",
            });
          }
        })
        .catch((err) => {
          console.error("Error adding toy:", err);
          Swal.fire({
            title: "Error",
            text: "There was an issue adding the toy. Please try again.",
            icon: "error",
            confirmButtonText: "Ok",
          });
        });
    }
  };

  return (
    <div className="pt-16">
      <div className="w-full mx-auto p-8 md:p-16 lg:p-24 bg-slate-50 shadow-lg rounded-lg mt-10">
        <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800 uppercase">
          Add a New Toy
        </h2>
        <form onSubmit={handleAddToy}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-gray-700">Name</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`input input-bordered w-full ${
                  errors.name ? "input-error" : ""
                }`}
                placeholder="Toy Name"
              />
              {errors.name && (
                <span className="text-red-500 text-sm">{errors.name}</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-gray-700">
                  Seller Name
                </span>
              </label>
              <input
                type="text"
                name="seller_name"
                value={formData.seller_name}
                onChange={handleInputChange}
                className={`input input-bordered w-full ${
                  errors.seller_name ? "input-error" : ""
                }`}
                placeholder="Seller Name"
              />
              {errors.seller_name && (
                <span className="text-red-500 text-sm">
                  {errors.seller_name}
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-gray-700">
                  Email
                </span>
              </label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`input input-bordered w-full ${
                  errors.email ? "input-error" : ""
                }`}
                placeholder="Email"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">{errors.email}</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-gray-700">
                  Rating
                </span>
              </label>
              <input
                type="number"
                name="rating"
                value={formData.rating}
                onChange={handleInputChange}
                className={`input input-bordered w-full ${
                  errors.rating ? "input-error" : ""
                }`}
                placeholder="Rating (1-5)"
              />
              {errors.rating && (
                <span className="text-red-500 text-sm">{errors.rating}</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-gray-700">
                  Price
                </span>
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                className={`input input-bordered w-full ${
                  errors.price ? "input-error" : ""
                }`}
                placeholder="Price"
              />
              {errors.price && (
                <span className="text-red-500 text-sm">{errors.price}</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-gray-700">
                  Quantity
                </span>
              </label>
              <input
                type="number"
                name="available_quantity"
                value={formData.available_quantity}
                onChange={handleInputChange}
                className={`input input-bordered w-full ${
                  errors.available_quantity ? "input-error" : ""
                }`}
                placeholder="Available Quantity"
              />
              {errors.available_quantity && (
                <span className="text-red-500 text-sm">
                  {errors.available_quantity}
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-gray-700">
                  Subcategory
                </span>
              </label>
              <input
                type="text"
                name="subcategory"
                value={formData.subcategory}
                onChange={handleInputChange}
                className={`input input-bordered w-full ${
                  errors.subcategory ? "input-error" : ""
                }`}
                placeholder="Subcategory (Math Learning, Engineering kits, etc.)"
              />
              {errors.subcategory && (
                <span className="text-red-500 text-sm">
                  {errors.subcategory}
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-gray-700">
                  Image
                </span>
              </label>
              <input
                type="file"
                name="photo"
                onChange={handleImageUpload}
                className={`input input-bordered w-full ${
                  errors.image_url ? "input-error" : ""
                }`}
              />
              {errors.image_url && (
                <span className="text-red-500 text-sm">{errors.image_url}</span>
              )}
            </div>
          </div>
          <div className="form-control mt-6">
            <label className="label">
              <span className="label-text font-bold text-gray-700">
                Description
              </span>
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className={`textarea textarea-bordered w-full ${
                errors.description ? "textarea-error" : ""
              }`}
              placeholder="Description"
            ></textarea>
            {errors.description && (
              <span className="text-red-500 text-sm">{errors.description}</span>
            )}
          </div>
          <div className="form-control mt-6 text-center">
            <button
              type="submit"
              className="bg-[#f06d4f] px-4 py-2 text-white mx-auto rounded-sm w-32 font-bold uppercase"
            >
              Add Toy
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddToy;
