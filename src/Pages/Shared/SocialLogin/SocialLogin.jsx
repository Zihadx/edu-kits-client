import google from "../../../assets/google.png";
import facebook from "../../../assets/facebook.png";
import github from "../../../assets/github.png";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";

const SocialLogin = () => {
  const { googleSign } = useContext(AuthContext);
  const handleGoogleSignIn = () => {
    googleSign()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="divider">OR</div>
      <div className="flex justify-center items-center gap-3 mb-4">
        <button
          onClick={handleGoogleSignIn}
          className=" btn-circle flex justify-center items-center bg-red-50"
        >
          <img className="h-8 w-8" src={google} alt="" />
        </button>
        <button className=" btn-circle flex justify-center items-center bg-red-50">
          <img className="h-10 w-10" src={facebook} alt="" />
        </button>
        <button className=" btn-circle flex justify-center items-center bg-red-50">
          <img className="h-8 w-8" src={github} alt="" />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
