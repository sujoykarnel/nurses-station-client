import { Link, NavLink } from "react-router-dom";
import { FaSignInAlt, FaUser } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";

const NavBar = () => {
  const { user, logOutUser } = useAuth();

  console.log(user);

  const handleLogOut = (e) => {
    e.preventDefault();
    logOutUser()
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };

  const navbarMenu = (
    <>
      <li>
        <NavLink className=" hover:bg-black" to={"/"}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className=" hover:bg-black" to={"/aboutUs"}>
          About
        </NavLink>
      </li>
      <li>
        <NavLink className=" hover:bg-black" to={"/services"}>
          Services
        </NavLink>
      </li>
      <li>
        <NavLink className=" hover:bg-black" to={"/nurses"}>
          Nurses
        </NavLink>
      </li>
      <li>
        <NavLink className=" hover:bg-black" to={"/contact"}>
          Contact
        </NavLink>
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
              {user?.image ? (
                <div className="w-10 rounded-full">
                  <img alt="Tailwind CSS Navbar component" src={<FaUser />} />
                </div>
              ) : (
                <button className="btn btn-circle">
                  <FaUser className="text-2xl" />
                </button>
              )}
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-neutral text-neutral-content bg-opacity-70 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between hover:bg-black">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a className=" hover:bg-black">Settings</a>
              </li>
              <li>
                <button className=" hover:bg-black" onClick={handleLogOut}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
