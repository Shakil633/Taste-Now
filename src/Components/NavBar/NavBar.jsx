import { useState } from "react";
import { RiShoppingCart2Line } from "react-icons/ri";

const NavBar = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div>
      <div className="navbar bg-base-100 lg:px-12 xl:px-24 2xl:px-80 md:px-10 px-5 top-0 fixed z-50 lg:p-3 p-3 md:p-3 xl:p-4 2xl:p-6">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
              onClick={toggleDrawer}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
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
            <div
              className={`fixed left-0 top-0 h-full w-[100%] bg-[#f72d57] z-50 transition-transform ease-in-out duration-300 transform ${
                isDrawerOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <div className="flex justify-end p-2">
                <button
                  className="btn btn-circle btn-sm bg-[#f72d57] text-white"
                  onClick={toggleDrawer}
                >
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <ul className="menu menu-sm mt-3 p-2 text-center poppins-regular text-white text-2xl font-normal">
                <div className=" text-center text-white ">
                  <h2 className=" front text-4xl font-medium">Taste now</h2>
                </div>
                <hr className=" mt-16 mb-16 border" />
                <li
                  className={`${
                    activeTab === "home" ? "text-white font-bold" : "text-white"
                  } text-2xl `}
                  onClick={() => handleTabClick("home")}
                >
                  Home
                </li>
                <li
                  className={`${
                    activeTab === "about"
                      ? "text-white font-bold"
                      : "text-white"
                  } py-3 text-2xl `}
                  onClick={() => handleTabClick("about")}
                >
                  About us
                </li>
                <li
                  className={`${
                    activeTab === "blog" ? "text-white font-bold" : "text-white"
                  } text-2xl `}
                  onClick={() => handleTabClick("blog")}
                >
                  Blog
                </li>
                <li
                  className={`${
                    activeTab === "contact"
                      ? "text-white font-bold"
                      : "text-white"
                  } py-3 text-2xl`}
                  onClick={() => handleTabClick("contact")}
                >
                  Contact us
                </li>
                <div className="mt-10">
                  <a className="py-2 px-8 rounded-md text-[#f72d57] bg-[#ffffff] poppins-regular">
                    Sign up
                  </a>
                </div>
              </ul>
            </div>
          </div>
          <a className="front text-[#f72d57] lg:text-4xl xl:text-5xl 2xl:text-6xl md:text-4xl text-[32px]">Taste now</a>
        </div>
        <div className="navbar-center hidden lg:flex items-center justify-center">
          <ul className="menu menu-horizontal gap-10 items-center text-base poppins-regular lg:text-lg md:text-lg xl:text-lg 2xl:text-3xl ">
            <li
              className={`${
                activeTab === "home"
                  ? "border-b-[#f72d57] border-b-2 text-[#f72d57]"
                  : "hover:border-b-[#f72d57] hover:border-b-2 hover:text-[#f72d57]"
              } cursor-pointer`}
              onClick={() => handleTabClick("home")}
            >
              Home
            </li>
            <li
              className={`${
                activeTab === "about"
                  ? "border-b-[#f72d57] border-b-2 text-[#f72d57]"
                  : "hover:border-b-[#f72d57] hover:border-b-2 hover:text-[#f72d57]"
              } cursor-pointer`}
              onClick={() => handleTabClick("about")}
            >
              About us
            </li>
            <li
              className={`${
                activeTab === "blog"
                  ? "border-b-[#f72d57] border-b-2 text-[#f72d57]"
                  : "hover:border-b-[#f72d57] hover:border-b-2 hover:text-[#f72d57]"
              } cursor-pointer`}
              onClick={() => handleTabClick("blog")}
            >
              Blog
            </li>

            <li
              className={`${
                activeTab === "contact"
                  ? "border-b-[#f72d57] border-b-2 text-[#f72d57]"
                  : "hover:border-b-[#f72d57] hover:border-b-2 hover:text-[#f72d57]"
              } cursor-pointer`}
              onClick={() => handleTabClick("contact")}
            >
              Contact us
            </li>
          </ul>
        </div>
        <div className="navbar-end flex lg:hidden">
          <RiShoppingCart2Line className="text-4xl" />
        </div>
        <div className="navbar-end hidden lg:flex">
          <a className="md:py-2 md:px-5 xl:py-2 xl:px-6 2xl:py-4 2xl:px-7 rounded-md bg-[#f72d57] text-white poppins-regular">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;


