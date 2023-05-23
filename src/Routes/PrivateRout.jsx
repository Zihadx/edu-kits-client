import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate } from "react-router-dom";

const PrivateRout = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    if(loading){
        return (
            <div className="text-center">
              <progress className="progress w-56"></progress>
            </div>
          );
    }
    if(user?.email){
        return children
    }
    return (
        <Navigate to='/login' state={{ from: location }} replace></Navigate>
    );
};

export default PrivateRout;