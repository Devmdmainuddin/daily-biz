import {toSlug} from "../utils";
import {BlogPost, Data} from "../validator/validator";

const blogs: BlogPost[] = [
  {
    title: "Exploring the Future of Web Development",
    slug: toSlug("Exploring the Future of Web Development"),
    description:
      "Web development is evolving rapidly. From static sites to dynamic applications, the possibilities are endless. Let's dive into the future of web development and the tools shaping it.",
    tags: ["Web Development", "Future", "Technology"],
    images: ["/images/p11-1.jpg", "/images/p11-2.jpg"],
    category: "Tech",
    isPublished: true,
    author: "Md. Mainuddin",
    userEmail: "mainuddin@example.com",
    authorImage: "https://example.com/images/authors/mainuddin.jpg",
  },
  {
    title: "How to Build a Responsive Website with Flexbox",
    slug: toSlug("How to Build a Responsive Website with Flexbox"),
    description:
      "Flexbox is a powerful CSS layout model that helps create responsive and flexible designs. In this post, we’ll explore how to build a responsive website using Flexbox.",
    tags: ["CSS", "Web Design", "Responsive Design"],
    images: ["/images/p11-1.jpg", "/images/p11-2.jpg"],
    category: "Web Design",
    isPublished: true,
    author: "Jane Doe",
    userEmail: "jane.doe@example.com",
    authorImage: "https://example.com/images/authors/jane_doe.jpg",
  },
  {
    title: "Introduction to JavaScript ES6 Features",
    slug: toSlug("Introduction to JavaScript ES6 Features"),
    description:
      "JavaScript ES6 introduced several features that improved the language’s usability and performance. This post covers some of the most important new features like arrow functions, classes, and template literals.",
    tags: ["JavaScript", "ES6", "Programming"],
    images: ["/images/p11-1.jpg", "/images/p11-2.jpg"],
    category: "Programming",
    isPublished: true,
    author: "John Smith",
    userEmail: "john.smith@example.com",
    authorImage: "https://example.com/images/authors/john_smith.jpg",
  },
  {
    title: "Building an E-Commerce Site with React",
    slug: toSlug("Building an E-Commerce Site with React"),
    description:
      "React is an ideal choice for building fast, scalable, and modern e-commerce websites. This guide will walk you through the process of building an e-commerce site with React.",
    tags: ["React", "E-commerce", "Web Development"],
    images: ["/images/p11-1.jpg", "/images/p11-2.jpg"],
    category: "Web Development",
    isPublished: true,
    author: "Alex Johnson",
    userEmail: "alex.johnson@example.com",
    authorImage: "https://example.com/images/authors/alex_johnson.jpg",
  },
  {
    title: "A Guide to Understanding CSS Grid",
    slug: toSlug("A Guide to Understanding CSS Grid"),
    description:
      "CSS Grid Layout is a two-dimensional layout system that makes it easy to create complex, responsive web designs. This post explains how to use CSS Grid for modern layouts.",
    tags: ["CSS", "CSS Grid", "Web Design"],
    images: ["/images/p11-1.jpg", "/images/p11-2.jpg"],
    category: "Web Design",
    isPublished: true,
    author: "Mary Lee",
    userEmail: "mary.lee@example.com",
    authorImage: "https://example.com/images/authors/mary_lee.jpg",
  },
  {
    title: "The Best Code Editors for Web Developers",
    slug: toSlug("The Best Code Editors for Web Developers"),
    description:
      "Choosing the right code editor can make a huge difference in productivity. Here’s a list of the best code editors for web developers, including features, pros, and cons.",
    tags: ["Tools", "Web Development", "Code Editors"],
    images: ["/images/p11-1.jpg", "/images/p11-2.jpg"],
    category: "Tech",
    isPublished: true,
    author: "David Clark",
    userEmail: "david.clark@example.com",
    authorImage: "https://example.com/images/authors/david_clark.jpg",
  },
  {
    title: "Mastering React Hooks: A Complete Guide",
    slug: toSlug("Mastering React Hooks: A Complete Guide"),
    description:
      "React Hooks are a new way to work with state and side effects in React. This post will teach you how to use React Hooks and build functional components that are easier to manage.",
    tags: ["React", "Hooks", "Web Development"],
    images: ["/images/p11-1.jpg", "/images/p11-2.jpg"],
    category: "Web Development",
    isPublished: true,
    author: "Sophie Turner",
    userEmail: "sophie.turner@example.com",
    authorImage: "https://example.com/images/authors/sophie_turner.jpg",
  },
  {
    title: "The Rise of Artificial Intelligence in Web Development",
    slug: toSlug("The Rise of Artificial Intelligence in Web Development"),
    description:
      "AI is revolutionizing web development in many ways, from code generation to user experience personalization. In this post, we explore how AI is impacting web development and the tools available.",
    tags: ["AI", "Web Development", "Technology"],
    images: ["/images/p11-1.jpg", "/images/p11-2.jpg"],
    category: "Tech",
    isPublished: true,
    author: "Liam Brown",
    userEmail: "liam.brown@example.com",
    authorImage: "https://example.com/images/authors/liam_brown.jpg",
  },
  {
    title: "A Beginner’s Guide to Node.js",
    slug: toSlug("A Beginner’s Guide to Node.js"),
    description:
      "Node.js is a powerful JavaScript runtime that allows you to build scalable network applications. This post is a beginner’s guide to understanding Node.js and how to get started.",
    tags: ["Node.js", "Backend Development", "JavaScript"],
    images: ["/images/p11-1.jpg", "/images/p11-2.jpg"],
    category: "Programming",
    isPublished: true,
    author: "Emma Davis",
    userEmail: "emma.davis@example.com",
    authorImage: "https://example.com/images/authors/emma_davis.jpg",
  },
  {
    title: "Designing an Effective UX for E-Commerce Websites",
    slug: toSlug("Designing an Effective UX for E-Commerce Websites"),
    description:
      "User experience (UX) plays a crucial role in the success of an e-commerce website. In this post, we’ll discuss the principles of effective UX design for online stores.",
    tags: ["UX", "E-commerce", "Web Design"],
    images: ["/images/p11-1.jpg", "/images/p11-2.jpg"],
    category: "Web Design",
    isPublished: true,
    author: "Olivia Green",
    userEmail: "olivia.green@example.com",
    authorImage: "https://example.com/images/authors/olivia_green.jpg",
  },
];
const data: Data = {
  headerMenus: [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Today's News",
      href: "/search?tag=todays-deal",
    },
    {
      name: "Sports",
      href: "/search?tag=sports",
    },
    {
      name: "Business",
      href: "/search?tag=business",
    },
    {
      name: "Politics",
      href: "/search?tag=politics",
    },
    {
      name: "Entertainment",
      href: "/search?tag=entertainment",
    },
    {
      name: "Featured Blogs",
      href: "/search?tag=featured",
    },
    {
      name: "About Us",
      href: "/about",
    },
    {
      name: "Help",
      href: "/page/help",
    },
  ],
  blogs,
};
export default data;

export const POSTS: { title: string; href: string; description: string }[] = [
  {
    title: "React",
    href: "/blog/react",
    description:
      "Learn React.js and Next.js in a simple to understand articles",
  },
  {
    title: "Javascript",
    href: "/blog/javascript",
    description: "Learn what are new in the javascript world",
  },
  {
    title: "CSS",
    href: "/blog/css",
    description: "Everything about CSS and the new features.",
  },
  {
    title: "Performance",
    href: "/blog/performance",
    description: "How to make your next app Blazing fast",
  },
  {
    title: "Animation",
    href: "/blog/animations",
    description:
      "Everything you need to know about animations. We are going to learn about animation library like framer motion, GSAP and many more.",
  },
  {
    title: "Career",
    href: "/blog/career",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];