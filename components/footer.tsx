import { Cpu } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="px-10 py-5 border-t text-center bg-white">
        <div className="flex items-center gap-2 justify-center">
          <p className="font-medium">Tech-<span className="text-orange-500">Her</span></p>
          <Cpu className=" h-4 w-4 text-primary" />
        </div>
        <p> &copy; {new Date().getFullYear()} All rights reserved</p>
      </footer>
    </div>
  );
};

export default Footer;
