import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo/toyzone.png";
import { motion } from "framer-motion";
import Swal from "sweetalert2"; 
import avatar from "../../../assets/image/avtar.png"

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollY = 0;

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/alltoy">Toys</Link>
      </li>
      {user ? (
        <>
          <li>
            <Link to="addtoy">Add Toys</Link>
          </li>
          <li>
            <Link to="/mytoy">My Toys</Link>
          </li>
        </>
      ) : (
        <>
          <li onClick={() => handleRestrictedRoute("Add Toys")}>
            <Link to="#">Add Toys</Link>
          </li>
          <li onClick={() => handleRestrictedRoute("My Toys")}>
            <Link to="#">My Toys</Link>
          </li>
        </>
      )}
      <li>
        <Link to="/blog">Blog</Link>
      </li>
    </>
  );

  const handleRestrictedRoute = (route) => {
    Swal.fire({
      title: "Login Required",
      text: `You need to log in to access the ${route} page.`,
      icon: "warning",
      confirmButtonText: "Go to Login",
      confirmButtonColor: "#f06d4f",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/login");
      }
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY = window.scrollY <= 0 ? 0 : window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      className={`navbar fixed z-20 w-full px-2 md:px-20 ${
        isScrolled
          ? "bg-gray-800 opacity-70 text-white shadow-lg"
          : "bg-transparent text-black"
      } transition-all duration-300 ease-in-out h-16`}
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden"></label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case">
          <img className="h-12 w-12" src={logo} alt="logo" />
          <h1 className="font-bold text-2xl">
            Toy<span className="text-[#f06d4f] font-extrabold">Zone</span>
          </h1>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="px-1 uppercase flex gap-8">{navItems}</ul>
      </div>
      <div className="navbar-end">
        {user?.email ? (
          <button
            onClick={handleLogOut}
            className="font-semibold bg-[#37cdbe] px-4 py-1 rounded-md text-white"
          >
            Log Out
          </button>
        ) : (
          <Link
            className="font-semibold bg-[#37cdbe] px-4 py-1 rounded-md text-white"
            to="/login"
          >
            Login
          </Link>
        )}
        {user && (
          <>
            <img
              src={user?.photoURL || avatar}
              alt="user"
              className="h-10 w-10 rounded-full ms-3"
            />
          </>
        )}
      </div>
    </motion.div>
  );
};

export default Navbar;
