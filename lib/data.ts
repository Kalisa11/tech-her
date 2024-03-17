import article1 from "@/public/articles/article-1.jpg";
import article2 from "@/public/articles/article-2.jpg";
import article3 from "@/public/articles/article-3.jpg";
import education from "@/public/resources/education.jpg";
import podcast from "@/public/resources/podcast.jpg";
import guides from "@/public/resources/guides.jpg";
import event1 from "@/public/event/event1.jpg";
import event2 from "@/public/event/event2.jpg";
import event3 from "@/public/event/event3.jpg";

export const navlinks = [
  { name: "Articles", href: "#" },
  { name: "Workshops", href: "#" },
  { name: "Community", href: "#" },
  { name: "Events", href: "#" },
  { name: "Resources", href: "#" },
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

export const resources = [
  {
    image: education,
    title: "Educational",
    description:
      "Coding bootcamps, tech conferences, and leadership workshops.",
  },
  {
    image: podcast,
    title: "Podcast",
    description:
      "Listen to conversations with top female voices in the tech sector.",
  },
  {
    image: guides,
    title: "GUIDES & TOOLS",
    description: "Coding languages, design mock-ups or wire-frames.",
  },
];

export const events = [
  {
    id: 1,
    title: "Tech Leadership Summit",
    date: "13 March 2024",
    location: "London",
    image: event1,
    description:
      "Join us for a day of inspiring talks, workshops, and networking opportunities",
  },
  {
    id: 2,
    title: "Empowerment in Tech",
    date: "15 March 2024",
    location: "New York",
    image: event2,
    description:
      "A workshop in empowering women in tech through networking and education",
  },
  {
    id: 3,
    title: "Navigating the Tech Industry",
    date: "17 March 2024",
    location: "Kigali",
    image: event3,
    description:
      "A panel discussion on the challenges and opportunities faced by women in tech",
  },
];
