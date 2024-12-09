import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/NavBar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";

const Main = () => {
  const { user } = useContext(AuthContext); // Get user information from context
  const location = useLocation();

  // Paths where Navbar and Footer should be hidden for non-logged-in users
  const noHeaderFooterPaths = ["/login", "/registration"];

  const shouldHideHeaderFooter =
    noHeaderFooterPaths.includes(location.pathname) && !user;

  return (
    <div className="h-screen">
      {!shouldHideHeaderFooter && <Navbar />}
      <Outlet />
      {!shouldHideHeaderFooter && <Footer />}
    </div>
  );
};

export default Main;
