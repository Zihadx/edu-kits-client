import { Link } from "react-router-dom";
const Navbar = () => {
  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link>All Toys</Link>
      </li>
      <li>
        <Link>My Toys</Link>
      </li>
      <li>
        <Link>Add Toys</Link>
      </li>
      <li>
        <Link>Blog</Link>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar bg-base-100 h-28 shadow-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case">
            <img className="h-14 w-14 mr-2" src='https://i.ibb.co/ZM3x58Q/Pngtree-technology-and-science-logo1111111111111111-4100449.jpg' alt="" />
            <h1 className="font-bold text-4xl">Edu<span className="text-[#f06d4f] font-extrabold">Kits</span></h1>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          <Link className="font-bold mr-3 btn btn-accent text-white" to="/login">
            Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
