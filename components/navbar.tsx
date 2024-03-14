import React from "react";
import { Button } from "@/components/ui/button";
import { Cpu } from "lucide-react";
import { navlinks } from "@/lib/data";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-10 py-2 border-b bg-white top-0 sticky">
      <h1 className="flex items-center text-xl font-semibold">
        Tech-Her
        <Cpu className="pl-2"/>
      </h1>
      <div className="flex items-center gap-6 text-sm">
        {navlinks.map((link) => (
          <a
            className="hover:text-gray-500 transition duration-200 text-sm"
            key={link.name}
            href={link.href}
          >
            {link.name}
          </a>
        ))}
        <Button>Get Involved</Button>
      </div>
    </div>
  );
};

export default Navbar;