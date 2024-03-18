import { articles } from "@/lib/data";
import Image from "next/image";
import { CiCalendar } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";

const Articles = () => {
  return (
    <div className="p-10 space-y-6">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold">
          Female-Focused Tech Articles & News
        </h2>
        <p className="text-sm max-w-3xl">
          Explore our thought-provoking articles, expert interviews, and
          behind-the-scenes updates.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div
            key={article.id}
            className="rounded-r-xl rounded-bl-xl bg-slate-50 cursor-pointer shadow-md relative
            transition duration-200 transform hover:shadow-lg"
          >
            <Image
              src={article.image}
              alt="Article image"
              width={200}
              height={100}
              unoptimized
              className="object-cover w-full rounded-t-xl aspect-[2/1]
              hover:grayscale-0 transition duration-150"
            />
            <div className="p-4 space-y-3 w-full">
              <div className="flex items-center flex-wrap gap-2">
                {article.categories.map((category) => (
                  <div
                    key={category}
                    className="rounded py-1 px-2 border bg-orange-50 text-orange-500 w-fit text-xs shadow-sm  "
                  >
                    {category}
                  </div>
                ))}
              </div>
              <h3 className="text-lg font-bold uppercase">{article.title}</h3>
              <p className="text-sm">{article.description}</p>
              <div className="w-full flex items-center justify-between">
                <div className="text-sm flex items-center gap-2">
                  <CiCalendar className="h-4 w-4 text-primary" />
                  <p className="text-sm">{article.date}</p>
                </div>
                <a
                  href="#"
                  className="text-sm text-orange-500 rounded-full p-1 border border-orange-500 hover:text-orange-600 hover:border-orange-600"
                >
                  <FaArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div
              className="rounded-xl bg-primary shadow backdrop-filter backdrop-blur-0 w-fit flex items-center
              gap-1 px-2 py-1 text-white absolute right-2 top-2"
            >
              <span className="text-xs">{`${article.readTime} min read`}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
