"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { LampContainer } from "./lamp";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
};

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [activeProject, setActiveProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "EMuhokama",
      description:
        "Yo'l harakati xavfsizligini ta'minlash va qoidabuzarliklarni samarali boshqarish",
      image: "/emuhokama.png",
      tags: [
        "React",
        "TypeScript",
        "Tanstack Query",
        "Ant Design",
        "Tailwind CSS",
        "React Router",
      ],
      link: "https://e-muhokama.uz/",
    },
    {
      id: 2,
      title: "MNAZORAT",
      description:
        "Mahalla yettiklarini nazorat qilish uchun MNAZORAT axborot tizimi",
      image: "/uzgerb.png",
      tags: [
        "React",
        "TypeScript",
        "Tanstack Query",
        "Tailwind CSS",
        "Ant Design",
        "React Router",
      ],
      link: "https://new.mnazorat.uz/",
    },
    {
      id: 3,
      title: "MINFORMER",
      description: "Bog'chalar uchun maxsus tayyorlangan saytlar",
      image: "",
      tags: [
        "React js & Next.js",
        "TypeScript",
        "Tanstack Query",
        "React Router",
        "Tailwind CSS",
        "Shadcn UI",
      ],
      link: "http://minformer.mbosapp.uz/auth/login",
    },
    {
      id: 4,
      title: "MBOS Crm",
      description:
        "A web application that uses AI to generate unique images based on text prompts provided by users.",
      image: "/mbos.svg",
      tags: [
        "React",
        "TypeScript",
        "Tanstack Query",
        "Shadcn UI",
        "Tailwind CSS",
        "React Router",
      ],
      link: "https://crm.mbosapp.uz/",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="projects" className="py-20 bg-black" ref={ref}>
      <div className="container mx-auto px-4">
        <LampContainer className="h-[40vh] min-h-[400px]">
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className=" bg-gradient-to-br from-purple-400 to-pink-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
          >
            Loyihalar
          </motion.h1>
        </LampContainer>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              className="group relative overflow-hidden rounded-2xl bg-gray-900/50 hover:bg-gray-800/50 transition-all duration-300"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="relative h-[300px] overflow-hidden">
                <Image
                  fill
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-70"></div>
              </div>

              <div className="p-6 relative z-10">
                <h3 className="text-2xl font-bold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-purple-900/30 rounded-full text-purple-300 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  className="inline-flex items-center text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors"
                >
                  Loyihani ko&apos;rish
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>

              {activeProject === project.id && (
                <div className="absolute -bottom-2 -right-2 w-32 h-32 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full opacity-30 blur-xl"></div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
