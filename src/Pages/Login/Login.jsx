import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Login = () => {
  const { signIn } = useContext(AuthContext); 
  const location = useLocation(); 
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault(); 
    const form = event.target;
    const email = form.email.value; 
    const password = form.password.value; 

    signIn(email, password)
      .then(() => {
        Swal.fire({
          title: "Login Successful!",
          text: "Welcome back!",
          icon: "success",
          confirmButtonText: "Proceed",
          confirmButtonColor: "#37cdbe",
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          title: "Login Failed",
          text: "Please check your credentials and try again.",
          icon: "error",
          confirmButtonText: "Retry",
        });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col lg:flex-row w-11/12 max-w-4xl shadow-lg border border-gray-200 rounded-lg overflow-hidden h-[600px]">
        <div
          className="hidden lg:block lg:w-1/2 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://i.ibb.co/vsH7hFn/abacus-5787097.jpg')",
          }}
        ></div>
        <div className="w-full lg:w-1/2 p-10">
          <h2 className="text-4xl font-bold text-[#f06d4f] text-center mb-4">
            Welcome Back
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Please log in to continue accessing your account.
          </p>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="text-right">
              <Link
                to="/forgot-password"
                className="text-sm text-blue-500 hover:underline"
              >
                Forgot password?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-[#f06d4f] text-white font-semibold rounded-lg hover:bg-orange-600 transition duration-200"
            >
              Login
            </button>
          </form>
          <SocialLogin />
          <p className="mt-4 text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link
              to="/registration"
              className="font-semibold text-blue-500 hover:underline"
            >
              Sign up now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
