import { NavLink } from "react-router-dom";

import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import Carts from "../pages/Carts";
import useCart from "../hooks/useCart";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const [cart]=useCart()
  console.log(cart);
  return (
    <div className=" ">
      <nav className="z-10 fixed bg-[#151515] bg-opacity-30   text-white w-full ">
        <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between ">
            <div className="uppercase flex flex-col gap-1 font-cinzel">
              <p className="font-bold text-2xl">BISTRO BOSS</p>
              <p className="font-semibold tracking-[8px]">Restaurant</p>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-gray-500  hover:text-gray-600 focus:outline-none focus:text-gray-600 "
                aria-label="toggle menu"
              >
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu open: "block", Menu closed: "hidden" */}
          <div
            className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white  md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${
              isOpen
                ? "translate-x-0 opacity-100"
                : "opacity-0 -translate-x-full"
            }`}
          >
            <div className="flex md:items-center text-sm flex-col md:flex-row md:mx-6 list-none space-x-3 uppercase font-semibold">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/contactus">CONTACT us</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard">DASHBOARD</NavLink>
              </li>
              <li>
                <NavLink to="/ourmenu">Our Menu</NavLink>
              </li>
              <li>
                <NavLink to="/ourshop">Our Shop</NavLink>
              </li>
              <li className={user ? "block" : "hidden"}>
                <NavLink to="/dashboard/cart">
                  <FaShoppingCart size={20}></FaShoppingCart>
                  <div className="badge  badge-secondary">{cart.length}</div>
                </NavLink>
              </li>
              <li>
                {user ? (
                  <button
                    onClick={() => {
                      logOut();
                    }}
                    className="btn btn-active btn-ghost"
                  >
                    Log Out
                  </button>
                ) : (
                  <NavLink to="/login">Login</NavLink>
                )}
              </li>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
