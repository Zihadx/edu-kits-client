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
      <div className="navbar bg-base-100 h-28">
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
            {/* <img className="w-20 h-20" src='https://i.ibb.co/Hq9Xm6j/20230519-024025.png' alt="" /> */}
            <h1 className="font-bold text-3xl">Playful Minds</h1>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          <Link className="font-bold" to="/login">
            Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
