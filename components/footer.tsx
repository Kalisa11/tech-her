import { Cpu } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="px-10 py-5 border-t text-center bg-white text-sm space-y-2">
        <div className="flex items-center gap-2 justify-center">
          <p className="font-medium text-base">
            Tech-<span className="text-orange-500">Her</span>
          </p>
          <Cpu className=" h-4 w-4 text-primary" />
        </div>
        <div className="flex items-center justify-center gap-4">
          <a href="#" className="hover:text-orange-500">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-orange-500">
            Terms of Service
          </a>
          <a href="#" className="hover:text-orange-500">
            Contact Us
          </a>
        </div>
        <p> &copy; {new Date().getFullYear()} All rights reserved</p>
      </footer>
    </div>
  );
};

export default Footer;
