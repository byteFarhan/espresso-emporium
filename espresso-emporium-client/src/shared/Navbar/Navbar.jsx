import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import swal from "sweetalert";

// import { navLogo } from "./images/more/logo1.png";
const Navbar = () => {
  const { user, userSignOut } = useAuth();
  const handleSignOut = () => {
    userSignOut()
      .then(() => {
        swal("User logout successfully.");
      })
      .catch((error) => {
        swal(error.message);
      });
  };
  const navLink = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/add-product">Add Product</NavLink>
      </li>
      <li>
        <NavLink to="/users">Users</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-[url('./images/more/15.png'),_linear-gradient(#6b7280,_#6b7280)] bg-blend-overlay font-rancho">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
          >
            {navLink}
          </ul>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-[60px] text-white">
          Espresso Emporium
        </h1>
      </div>
      <div className="hidden navbar-center lg:flex">
        <ul className="px-1 menu menu-horizontal">{navLink}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <button
            onClick={() => handleSignOut()}
            className="btn font-rancho text-xl md:text-2xl font-normal border-2 mb-5  hover:bg-[#c9ac86] hover:border-2 hover:border-[#331A15]  border-[#331A15] bg-[#D2B48C]"
          >
            Logout
          </button>
        ) : (
          <Link
            to={"/login"}
            className="btn font-rancho text-xl md:text-2xl font-normal border-2 mb-5  hover:bg-[#c9ac86] hover:border-2 hover:border-[#331A15]  border-[#331A15] bg-[#D2B48C]"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;

// // <div className="my-6 ">
// <div className=" font-rancho bg-[url('./images/more/15.jpg')] bg-blend-overlay py-3 bg-cover bg-center flex items-center justify-center gap-3">
//   <img
//     src={`./images/more/logo1.png`}
//     alt=""
//     className="max-w-[65px] max-h-[75px] md:max-h-[90px] md:max-w-[75px]"
//   />
//   <h1 className="text-4xl md:text-5xl lg:text-[60px] text-white">
//     Espresso Emporium
//   </h1>
// </div>
