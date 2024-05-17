import React from "react";
import { FaSearch } from "react-icons/fa";

function Header() {
  return (
    <header className="bg-black py-6 lg:py-12 text-gega-grey uppercase">
      <div className="container flex items-center justify-between space-x-8 lg:space-x-16">
        <a
          href=""
          className="ml-4 md:pl-0 text-4xl lg:text-6xl font-bold text-transparent bg-gradient-to-r bg-clip-text from-gega-red to-gega-grey"
        >
          GEGA
        </a>
        {/* Mobile Menu */}
        <div className="block md:hidden pr-4">
          <div className="space-y-1 cursor-pointer">
            <div className="bg-gega-grey w-8 h-1 rounded-full"></div>
            <div className="bg-gega-grey w-8 h-1 rounded-full"></div>
            <div className="bg-gega-grey w-8 h-1 rounded-full"></div>
          </div>
        </div>
        <nav className="hidden md:flex justify-between flex-1">
          <div className="flex items-center lg:text-lg space-x-4 lg:space-x-8">
            <a
              href=""
              className="hover:text-gega-melon transition duration-300"
            >
              movies
            </a>
            <a
              href=""
              className="hover:text-gega-melon transition duration-300"
            >
              celebrities
            </a>
            <a
              href=""
              className="hover:text-gega-melon transition duration-300"
            >
              blog
            </a>
            <a
              href=""
              className="hover:text-gega-melon transition duration-300"
            >
              news
            </a>
            <a
              href=""
              className="hover:text-gega-melon transition duration-300"
            >
              about
            </a>
          </div>
          <div className="flex items-center space-x-4 lg:space-x-8">
            <form>
              <div className="group border-r px-4 mx-4 py-1 border-gega-red">
                <input
                  type="text"
                  className="opacity-0 group-hover:opacity-100 bg-transparent border-b border-gega-red focus:outline-none w-24 lg:w-40 transition duration-300"
                />
                <button className="-ml-4 group-hover:ml-0 transition duration-300">
                  <FaSearch className="group-hover:text-gega-red transition duration-300" />
                </button>
              </div>
            </form>
            <div className="flex items-center space-x-4 lg:space-x-8 lg:text-lg">
              <a href="" className="">
                Login
              </a>
              <a
                href=""
                className="bg-gega-red px-3 py-1 hover:bg-rose-600 hover:text-gega-grey cursor-pointer transition duration-300 whitespace-nowrap"
              >
                Sign Up
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
