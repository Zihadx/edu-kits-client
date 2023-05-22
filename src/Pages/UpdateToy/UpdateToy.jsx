import { useLoaderData } from "react-router-dom";

const UpdateToy = () => {
  const toy = useLoaderData();
  const {
    _id,
    name,
    seller_name,
    email,
    rating,
    price,
    available_quantity,
    subcategory,
    image_url,
    description
  } = toy;
  return (
    <div className="px-4 md:px-12 lg-px-24 mt-8">
      <h1 className="text-5xl font-bold text-[#f06d4f] text-center my-8">
        Update: {name}
      </h1>
      <div className="card-body bg-base-200 rounded-xl md:12 lg:p-16">
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Title</span>
              </label>
              <input
                type="text"
                placeholder="name"
                defaultValue={name}
                name="title"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Seller Name</span>
              </label>
              <input type="text" name="name" defaultValue={seller_name} className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                defaultValue={email}
                name="email"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Rating</span>
              </label>
              <input
                type="text"
                name="rating"
                defaultValue={rating}
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Price</span>
              </label>
              <input
                type="text"
                name="price"
                defaultValue={price}
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Quantity</span>
              </label>
              <input
                type="text"
                name="quantity"
                defaultValue={available_quantity}
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">
                  Category (Math Learning, Science Kits, Engineering kits)
                </span>
              </label>
              <input
                type="text"
                name="category"
                defaultValue={subcategory}
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                defaultValue={image_url}
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Description</span>
            </label>

            <textarea
              name="description"
              defaultValue={description}
              className="textarea textarea-bordered textarea-lg w-full"
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <input
              className="btn btn-error btn-block text-white font-bold bg-[#f06d4f]"
              type="submit"
              value="Update Toy"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateToy;
