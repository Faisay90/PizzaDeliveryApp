import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-4 mt-5">
      © {new Date().getFullYear()} Pizza Delivery App. All rights reserved.
    </footer>
  );
};

export default Footer;
