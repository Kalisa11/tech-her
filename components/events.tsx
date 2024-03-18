import { articles, events } from "@/lib/data";
import Image from "next/image";
import { CiCalendar } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";

const Articles = () => {
  return (
    <div className="p-10 space-y-6 bg-slate-50">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold">Tech Events</h2>
        <p className="text-sm max-w-3xl">
          Explore our upcoming tech events, workshops, and community gatherings.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div
            key={event.id}
            className="rounded-xl bg-white cursor-pointer shadow-md relative
            transition duration-200 transform hover:shadow-lg"
          >
            <Image
              src={event.image}
              alt="event image"
              width={200}
              height={100}
              unoptimized
              className="object-cover w-full rounded-t-xl aspect-[2/1]
              hover:grayscale-0 transition duration-150"
            />
            <div className="p-4 space-y-2 w-full">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="text-sm flex items-center gap-2">
                  <CiCalendar className="h-4 w-4 text-primary" />
                  <p className="text-sm">{event.date}</p>
                </div>
                <div className="rounded py-1 px-2 bg-orange-50 text-orange-500 font-medium w-fit text-sm shadow-sm">
                  {event.location}
                </div>
              </div>
              <h3 className="text-lg font-bold uppercase">{event.title}</h3>
              <p className="text-sm">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
