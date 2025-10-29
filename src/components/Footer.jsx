import React from "react";

const Footer = () => {
  return (
    <footer className="  bg-white dark:bg-gradient-to-r from-purple-900 via-black to-purple-950 text-black  dark:text-gray-200 text-center p-10">
      © {new Date().getFullYear()} Gautam Awasthi
    </footer>
  );
};

export default Footer;
