import React from "react";
import {
  Typography,
} from "@material-tailwind/react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-6">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <Typography variant="small" className="text-sm text-gray-300">
          &copy; {new Date().getFullYear()} Mero Restaurant. All rights reserved.
        </Typography>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-white transition">Terms of Use</a>
          <a href="#" className="text-gray-400 hover:text-white transition">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
