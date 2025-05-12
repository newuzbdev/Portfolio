/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import TechCard from "./tech-card";

const techStacks = [
  {
    id: 2,
    title: "React",
    category: "Frontend stack",
    icon: "Re",
    color: "#61DAFB",
    description:
      "A JavaScript library developed by Facebook for building user interfaces. It uses a component-based architecture to create reusable UI elements and facilitates the development of single-page applications.",
  },
  {
    id: 3,
    title: "Javascript & Typescript",
    category: "Frontend stack",
    icon: "JS",
    color: "#F7DF1E",
    description:
      "A high-level, interpreted programming language primarily used for building dynamic and interactive web pages. It is widely supported across web browsers and serves as the foundation for many web technologies.",
  },
  {
    id: 4,
    title: "TanStack Query",
    category: "Frontend stack",
    icon: "TQ",
    color: "#FF4154",
    description:
      "Powerful asynchronous state management for TS/JS, React, Solid, Vue and Svelte. Formerly known as React Query, it simplifies data fetching, caching, and state management in applications.",
  },
  {
    id: 5,
    title: "Next.js",
    category: "Frontend stack",
    icon: "NJ",
    color: "#000000",
    description:
      "A React framework for production-grade applications that scales. It provides hybrid static & server rendering, TypeScript support, smart bundling, and route pre-fetching.",
  },
  {
    id: 6,
    title: "React Router",
    category: "Frontend stack",
    icon: "RR",
    color: "#CA4245",
    description:
      "A standard library for routing in React applications. It enables navigation between views, dynamic route matching, and nested route handling with a declarative approach.",
  },
  {
    id: 7,
    title: "shadcn/ui",
    category: "Frontend stack",
    icon: "UI",
    color: "#000000",
    description:
      "A collection of beautifully designed, accessible, and customizable React components built with Radix UI and Tailwind CSS. Perfect for building modern web applications.",
  },
  {
    id: 8,
    title: "Framer Motion",
    category: "Frontend stack",
    icon: "FM",
    color: "#0055FF",
    description:
      "A production-ready motion library for React that powers animations in user interfaces. It provides a simple and powerful API to create fluid animations and gestures.",
  },
];

const allTechStacks = [...techStacks, ...techStacks, ...techStacks].map(
  (stack, index) => ({
    ...stack,
    id: index + 1,
  })
);

export default function TechStackShowcase() {
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const secondScrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    const container2 = secondScrollContainerRef.current;
    if (!container || !container2) return;

    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => setIsScrolling(false), 150);
    };

    let scrollTimeout: NodeJS.Timeout;
    container.addEventListener("scroll", handleScroll);
    container2.addEventListener("scroll", handleScroll);

    const autoScroll = () => {
      if (container) {
        container.scrollLeft += 1;
        if (
          container.scrollLeft >=
          (container.scrollWidth - container.clientWidth) / 2
        ) {
          container.scrollLeft = 0;
        }
      }
      if (container2) {
        container2.scrollLeft -= 1;
        if (container2.scrollLeft <= 0) {
          container2.scrollLeft =
            (container2.scrollWidth - container2.clientWidth) / 2;
        }
      }
    };

    const interval = setInterval(autoScroll, 30);

    return () => {
      clearInterval(interval);
      clearTimeout(scrollTimeout);
      container.removeEventListener("scroll", handleScroll);
      container2.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="relative mb-20">
        <div className="text-center py-16 px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Using tools and{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-pink-500">
              Powerful Stack
            </span>{" "}
          </h1>
          <p className="text-lg max-w-3xl mx-auto text-gray-300">
            Discover how the right tools and a strong tech stack can boost your
            projects, streamline workflows, and deliver outstanding results.
          </p>
        </div>
      </div>

      <div className="relative group">
        <div
          ref={scrollContainerRef}
          className="overflow-x-auto pb-6 hide-scrollbar"
          style={{ scrollbarWidth: "none" }}
        >
          <div className="flex gap-6 px-4 min-w-max">
            {allTechStacks.map((stack, index) => (
              <motion.div
                key={stack.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (index * 0.1) % 0.5 }}
                className="w-[300px] flex-shrink-0"
              >
                <TechCard
                  title={stack.title}
                  category={stack.category}
                  icon={stack.icon}
                  color={stack.color}
                  description={stack.description}
                />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
      </div>

      <div className="relative group mt-6">
        <div
          ref={secondScrollContainerRef}
          className="overflow-x-auto pb-6 hide-scrollbar"
          style={{ scrollbarWidth: "none" }}
        >
          <div className="flex gap-6 px-4 min-w-max">
            {allTechStacks.map((stack, index) => (
              <motion.div
                key={`row2-${stack.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (index * 0.1) % 0.5 }}
                className="w-[300px] flex-shrink-0"
              >
                <TechCard
                  title={stack.title}
                  category={stack.category}
                  icon={stack.icon}
                  color={stack.color}
                  description={stack.description}
                />
              </motion.div>
            ))}
          </div>
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
}
