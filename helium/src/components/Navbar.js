import React from "react";

function Navbar() {
  return (
    <div className="flex flex-row justify-between px-10 py-5 bg-black/70 w-full">
      <h1 className="text-2xl font-bold hover:scale-150 duration-500 hover:text-[#e07dc5]">
        <a href="/">Helium</a>
      </h1>
      <ul className="flex flex-row w-1/2 justify-between">
        <a href="#">
          <li className="cursor-pointer hover:scale-150 hover:underline ease-in-out duration-500 hover:text-[#e07dc5]">
            5G
          </li>
        </a>
        <a href="#">
          <li className="cursor-pointer hover:scale-150 hover:underline ease-in-out duration-500 hover:text-[#e07dc5]">
            Explorer
          </li>
        </a>
        <a href="#">
          <li className="cursor-pointer hover:scale-150 hover:underline ease-in-out duration-500 hover:text-[#e07dc5]">
            Ecosystem
          </li>
        </a>
      </ul>
    </div>
  );
}

export default Navbar;
