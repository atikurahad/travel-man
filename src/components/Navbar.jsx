import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between h-[5rem] w-full  p-4 items-center gap-2 font-san bg-white">
        <p className="text-4xl font-bold text-blue-500">Travel Man</p>
        <div className="flex1">
          <ul
            className=" text-black flex justify-between" >
            <li className="text-2xl font-bold mx-2 ">Home</li>
            <li className="text-2xl font-bold mx-2 ">About</li>
            <li className="text-2xl font-bold mx-2">Contact</li>
            <li className="text-2xl font-bold mx-2">Deals</li>
            <li className="text-2xl font-bold mx-2">Voucher</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
