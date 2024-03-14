import hero from "@/public/hero/hero.jpg";
import { Cpu } from "lucide-react";

import { Button } from "./ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex items-center w-full p-10 h-[80vh] bg-slate-50">
      <div className="flex flex-col my-auto gap-10 w-1/2">
        <h1 className="text-5xl font-semibold ">
          Empowering young <span className="text-orange-500 italic">women</span> through
          technology
        </h1>
        <p className="text-base max-w-xl">
          We are a pioneering initiative dedicated to empowering young women
          with the knowledge, skills, and opportunities to thrive in the rapidly
          evolving digital landscape. In a world where technology plays an
          increasingly vital role in every aspect of life, we recognize the
          importance of ensuring that all young women have equal access to
          digital literacy and STEM education.
        </p>
        <Button className="w-fit">
          Join our community
          <Cpu className="pl-2" />
        </Button>
      </div>
      <div className="w-1/2 pl-10">
        <Image
          className="object-cover w-full h-full rounded-md"
          src={hero}
          alt="Hero image"
        />
      </div>
    </div>
  );
};

export default Hero;
