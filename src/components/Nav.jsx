import { NavLink } from "react-router-dom";

const Nav = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">DashBoard</NavLink>
      </li>
      <li>
        <NavLink to="/ourMenu">Our Manu</NavLink>
      </li>
      <li>
        <NavLink to="/ourShop">Our Shop</NavLink>
      </li>
    </>
  );
  return (
    <nav id="navSide" className="">
      <div className="navbar bg-black/30 fixed z-50 max-w-7xl">
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
              className="menu menu-sm dropdown-content text-base text-white bg-black/30 font-bold mt-2 z-50 p-2 shadow w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl text-white">Bistro Boss</a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-base text-white font-bold">{navLinks}</ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
