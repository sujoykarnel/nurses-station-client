import { Link, NavLink } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";

const NavBar = () => {
  const user = 0;
  const navbarMenu = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/aboutUs"}>About</NavLink>
      </li>
      <li>
        <NavLink to={"/services"}>Services</NavLink>
      </li>
      <li>
        <NavLink to={"/nurses"}>Nurses</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>Contact</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-neutral text-neutral-content bg-opacity-70 fixed max-w-screen-xl z-50 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-neutral text-neutral-content bg-opacity-70 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navbarMenu}
          </ul>
        </div>
        <Link to={"/"}>
          <img
            width={200}
            src="/src/assets/logo/nurses-station-navbar-logo-2.png"
            alt=""
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navbarMenu}</ul>
      </div>
      <div className="navbar-end">
        {!user ? (
          <Link to="/login">
            <button className="btn btn-circle ">
              <FaSignInAlt />
            </button>
          </Link>
        ) : (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
