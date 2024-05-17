import React from "react";
import { FaMoon } from "react-icons/fa6";

function Header() {
  return (
    <section className="justify-between flex mt-20">
      <h1 className="text-white tracking-widest text-5xl font-bold cursor-pointer">
        TODO
      </h1>
      <FaMoon className="text-white text-4xl cursor-pointer" />
    </section>
  );
}

export default Header;
