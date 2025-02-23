import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ cartCount }) => {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">
        🍕 Pizza Delivery
      </Link>
      <Link
        to="/cart"
        className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600"
      >
        🛒 Cart ({cartCount})
      </Link>
    </nav>
  );
};

export default Navbar;
