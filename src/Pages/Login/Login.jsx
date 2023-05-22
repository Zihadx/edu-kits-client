import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = event =>{
    event.preventDefault()
    console.log(handleLogin)
  }
    return (
        <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-1/2 md:mr-16">
            {/* <img src={image} alt="" /> */}
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 md:ml-14">
            <div className="card-body">
              <h1 className="text-5xl font-bold text-center">Login</h1>
              <form onSubmit={handleLogin}>
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
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="text"
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
                    value="Login"
                  />
                </div>
              </form>
              <p className="my-4 text-center">
                New to this? {" "}
                <Link to="/registration" className="font-bold text-[#f06d4f]">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;