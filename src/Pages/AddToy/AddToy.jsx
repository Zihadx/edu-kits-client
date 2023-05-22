const AddToy = () => {
  return (
    <div className="px-4 md:px-24 mt-8">
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
                name="title"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Seller Name</span>
              </label>
              <input type="text" name="name" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
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
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Category (Math Learning, Science Kits, Engineering kits)</span>
              </label>
              <input
                type="text"
                name="category"
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
              className="textarea textarea-bordered textarea-lg w-full"
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <input
              className="btn btn-error btn-block text-white font-bold bg-[#f06d4f]"
              type="submit"
              value="Add Toy"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddToy;
