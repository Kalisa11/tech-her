import React from "react";
import { Button } from "@/components/ui/button";
import commnty from "@/public/community/community.jpg";
import Image from "next/image";
import { resources } from "@/lib/data";

const Community = () => {
  return (
    <div className="bg-slate-50 px-10">
      <div className="flex items-center gap-4">
        <div className="w-full md:w-1/2 space-y-6">
          <div className="space-y-2">
            <h2 className="text-5xl font-bold">Join the community</h2>
            <p className="text-lg">
              Find out how you can get involved with TechHer&apos;s mission
            </p>
          </div>
          <p className="text-sm max-w-md">
            Ready to make an impact? Find out how you can get involved with
            TechHer&apos;s mission to empower young women through technology.
            Whether you&apos;re interested in volunteering, mentoring, or
            partnering with us, there&apos;s a place for you in our movement.
          </p>
          <Button>Join our mailing list</Button>
        </div>
        <div className="w-1/2 bg-red-100">
          <Image
            unoptimized
            className="w-full aspect-[16/9] object-cover"
            src={commnty}
            alt="community"
            width={400}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default Community;
