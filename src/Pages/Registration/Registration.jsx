/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import Swal from "sweetalert2";

const Registration = () => {
  const { createUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const handleSignUp = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value
    console.log(name, email, password,photo);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        Swal.fire({
          title: "Success!",
          text: "Login successfully",
          icon: "success",
          confirmButtonText: "Ok",
        });
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 md:mr-16">{/* <img src={image} alt="" /> */}</div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 md:ml-14">
          <div className="card-body">
            <h1 className="text-5xl font-bold text-center">Register</h1>
            <form onSubmit={handleSignUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
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
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo"
                  name="photo"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-error text-white bg-[#f06d4f]"
                  type="submit"
                  value="Register"
                />
              </div>
            </form>
            <p className="mt-4 text-center">
              Already have an account?{" "}
              <Link to="/login" className="font-bold text-[#f06d4f]">
                Login
              </Link>
            </p>
          </div>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Registration;
