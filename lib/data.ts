import article1 from "@/public/articles/article-1.jpg";
import article2 from "@/public/articles/article-2.jpg";
import article3 from "@/public/articles/article-3.jpg";

export const navlinks = [
  { name: "About", href: "#" },
  { name: "Workshops", href: "#" },
  { name: "Case Studies", href: "#" },
  { name: "Events", href: "#" },
];

export const articles = [
  {
    id: 1,
    title: "Breaking the Glass Ceiling: Women Leaders in Tech",
    categories: ["Leadership", "Diversity", "Technology"],
    description:
      "Explore the stories of pioneering women who have shattered barriers and risen to leadership roles in the tech industry...",
    date: "13 March 2024",
    readTime: 6,
    image: article1,
    link: "#",
  },
  {
    id: 2,
    title: "Empowering Women Through Coding: A Success Story",
    categories: ["Coding", "Empowerment", "Technology"],
    description:
      "Learn how coding bootcamps and initiatives are empowering women from diverse backgrounds to pursue careers in technology...",
    date: "15 March 2024",
    readTime: 5,
    image: article2,
    link: "#",
  },
  {
    id: 3,
    title: "Navigating the Tech Industry: Tips for Women Entrepreneurs",
    categories: ["Entrepreneurship", "Career", "Technology"],
    description:
      "Discover practical advice and insights for women entrepreneurs navigating the challenges and opportunities of the tech industry...",
    date: "17 March 2024",
    readTime: 7,
    image: article3,
    link: "#",
  },
];
