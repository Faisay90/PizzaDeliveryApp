import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between">
      <h1 className="text-2xl font-bold">🍕 Pizza Delivery</h1>
      <ul className="flex space-x-4">
        <li className="hover:text-red-400 cursor-pointer">Home</li>
        <li className="hover:text-red-400 cursor-pointer">Cart</li>
        <li className="hover:text-red-400 cursor-pointer">About</li>
      </ul>
    </nav>
  );
};

export default Navbar;
