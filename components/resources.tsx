import { Button } from "@/components/ui/button";
import { resources } from "@/lib/data";

const Resources = () => {
  return (
    <div className="px-10 py-5">
      <h2 className="text-2xl font-bold mb-4">Resources</h2>
      <div className="grid grid-cols-3 gap-4">
        {resources.map((resource, index) => (
          <div
            key={index}
            className="flex flex-col items-start gap-4 p-4 rounded-xl"
            style={{
              backgroundImage: `url(${resource.image.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              position: "relative",
            }}
          >
            {/* Overlay with gradient */}
            <div className="absolute inset-0 bg-black/70 opacity-80 rounded-xl" />
            <div className="relative space-y-4 z-10">
              <p className="text-xs tracking-wide font-light uppercase text-white">
                {resource.title}
              </p>
              <p className="text-xl font-bold max-w-md text-white">
                {resource.description}
              </p>
              <Button variant={"outline"}>Browse Resources</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;
