/* eslint-disable react-hooks/rules-of-hooks */
import Swal from 'sweetalert2'
const AddToy = () => {
  const handleAddToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.title.value;
    const seller_name = form.name.value;
    const email = form.email.value;
    const rating = form.rating.value;
    const price = form.price.value;
    const available_quantity = form.quantity.value;
    const subcategory = form.category.value;
    const image_url = form.photo.value;
    const description = form.description.value;

    const addNewToy = {
      name,
      seller_name,
      email,
      rating,
      price,
      available_quantity,
      subcategory,
      image_url,
      description,
    };
    console.log(addNewToy);

    fetch('http://localhost:5000/toys',{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(addNewToy)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.insertedId){
        Swal.fire({
          title: 'Success!',
          text: 'Toy added successfully',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
        
      }
    })
  };
  return (
    <div className="px-4 md:px-24 mt-8">
      <div className="card-body bg-base-200 rounded-xl md:12 lg:p-16">
        <form onSubmit={handleAddToy}>
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
                <span className="label-text font-bold">
                  Category (Math Learning, Science Kits, Engineering kits)
                </span>
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
