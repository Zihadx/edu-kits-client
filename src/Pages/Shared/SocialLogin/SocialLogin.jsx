import google from "../../../assets/google.png";
import github from "../../../assets/github.png";
import { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";
import Swal from "sweetalert2";

const SocialLogin = () => {
  const { googleSign } = useContext(AuthContext); 
  const navigate = useNavigate(); 
  const location = useLocation(); 

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSign()
      .then((result) => {
        const user = result.user; 
        console.log(user);
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
          text: "Unable to sign in with Google. Please try again.",
          icon: "error",
          confirmButtonText: "Retry",
        });
      });
  };

  return (
    <div>
      <div className="divider">OR</div>
      <div className="flex justify-center items-center gap-3 mb-4">
        <button
          onClick={handleGoogleSignIn}
          className="btn-circle flex justify-center items-center bg-red-50"
        >
          <img className="h-8 w-8" src={google} alt="Google Icon" />
        </button>
        <button className="btn-circle flex justify-center items-center bg-red-50">
          <img className="h-8 w-8" src={github} alt="GitHub Icon" />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
