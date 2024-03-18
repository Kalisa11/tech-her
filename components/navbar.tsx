import React from "react";
import { Button } from "@/components/ui/button";
import { Cpu } from "lucide-react";
import { navlinks } from "@/lib/data";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-10 py-2 border-b bg-white top-0 sticky z-20">
      <h1 className="flex items-center text-xl font-semibold">
        Tech-<span className="text-orange-500">Her</span>
        <Cpu className="pl-2"/>
      </h1>
      <div className="md:flex items-center gap-6 text-sm hidden">
        {navlinks.map((link) => (
          <a
            className="hover:text-orange-500 transition duration-200 text-sm"
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
