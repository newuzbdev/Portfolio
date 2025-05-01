/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Calendar,
  MapPin,
  Briefcase,
  GraduationCap,
  Award,
  User,
  Code,
  CodeXml,
} from "lucide-react";
import Image from "next/image";

type TimelineItem = {
  id: number;
  title: string;
  organization: string;
  date: string;
  description: string;
  icon: "work" | "education" | "award";
  location?: string;
};

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.3, 1, 1, 0.3]
  );

  const [activeTab, setActiveTab] = useState<
    "about" | "experience" | "education"
  >("about");

  const timelineItems: TimelineItem[] = [
    {
      id: 2,
      title: "Frontend Developer",
      organization: "MBOS",
      date: "2024 - 2025",
      description:
        "Developed responsive web applications and interactive user interfaces. Specialized in animation and micro-interactions to enhance user experience.",
      icon: "work",
      location: "Urganch shahar IT Park",
    },

    {
      id: 4,
      title: "Frontend Developer",
      organization: "Astrum Academy",
      date: "2022",
      description:
        "Developed responsive web applications and interactive user interfaces using modern frontend technologies like React, Next.js, and TypeScript. Implemented complex UI components and state management solutions.",
      icon: "education",
      location: "Tashkent",
    },
  ];

  const filteredItems = timelineItems.filter((item) => {
    if (activeTab === "experience") return item.icon === "work";
    if (activeTab === "education")
      return item.icon === "education" || item.icon === "award";
    return true;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const getIconComponent = (iconType: string) => {
    switch (iconType) {
      case "work":
        return <Briefcase className="w-5 h-5" />;
      case "education":
        return <GraduationCap className="w-5 h-5" />;
      case "award":
        return <Award className="w-5 h-5" />;
      default:
        return <User className="w-5 h-5" />;
    }
  };

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-black to-gray-900 overflow-hidden"
      ref={ref}
    >
      <div className="container mx-auto px-4" ref={containerRef}>
        <motion.div style={{ opacity }} className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500"
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: "5rem" } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <motion.div style={{ y }} className="lg:col-span-5  sticky top-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
              }
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <div className="relative overflow-hidden rounded-2xl border-2 border-purple-500/20 shadow-xl shadow-purple-500/10">
                <div className="aspect-[4/5] bg-gradient-to-br from-purple-900/20 to-pink-900/20">
                  <Image
                    src="/placeholder.svg?height=600&width=480"
                    width={480}
                    height={600}
                    alt="Ochilov Jaxongirmirzo"
                    className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>
            </motion.div>

            {/* Decorative elements */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-full blur-3xl"></div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full blur-3xl"></div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-4 shadow-xl z-[10]"
            >
              <div className="flex items-center space-x-2 text-white">
                <Code className="w-5 h-5" />
                <span className="font-medium">1+ Years Experience</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute -top-6 -right-6 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg p-4 shadow-xl"
            >
              <div className="flex items-center space-x-2 text-white">
                <CodeXml />
                <span className="font-medium">Frontend Specialist</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:col-span-7"
          >
            <div className="mb-8">
              <div className="flex space-x-2 mb-6 sticky top-0 bg-black/80 backdrop-blur-sm py-4 z-50">
                <button
                  onClick={() => setActiveTab("about")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === "about"
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                      : "bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-800"
                  }`}
                >
                  About Me
                </button>
                <button
                  onClick={() => setActiveTab("experience")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === "experience"
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                      : "bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-800"
                  }`}
                >
                  Experience
                </button>
                <button
                  onClick={() => setActiveTab("education")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === "education"
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                      : "bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-800"
                  }`}
                >
                  Education
                </button>
              </div>

              {activeTab === "about" && (
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.h3
                    variants={itemVariants}
                    className="text-3xl font-bold mb-4 text-white"
                  >
                    Frontend Developer
                  </motion.h3>

                  <motion.p
                    variants={itemVariants}
                    className="text-gray-300 mb-6 leading-relaxed text-lg"
                  >
                    I'm a passionate frontend developer with expertise in
                    building sophisticated web applications, specializing in CRM
                    systems and enterprise solutions. My journey in web
                    development spans over 1 year, during which I've mastered
                    modern frameworks and best practices for creating efficient,
                    scalable applications.
                  </motion.p>

                  <motion.p
                    variants={itemVariants}
                    className="text-gray-300 mb-6 leading-relaxed text-lg"
                  >
                    My focus is on developing robust CRM systems, dashboards,
                    and business applications that streamline operations and
                    enhance user productivity. I leverage React, TypeScript, and
                    modern state management solutions to build applications that
                    are not only user-friendly but also maintainable and
                    scalable for growing businesses.
                  </motion.p>

                  <motion.div variants={itemVariants} className="mb-8">
                    <div className="flex items-center space-x-2 text-gray-300 mb-2">
                      <MapPin className="w-5 h-5 text-purple-400" />
                      <span>Urganch</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-300">
                      <Calendar className="w-5 h-5 text-purple-400" />
                      <span>Available for projects</span>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    className="grid grid-cols-2 md:grid-cols-3 gap-4"
                  >
                    <div className="bg-gray-800/50 rounded-xl p-4 border border-purple-500/10 hover:border-purple-500/30 transition-colors duration-300">
                      <h4 className="text-xl font-bold text-purple-400 mb-1">
                        10+
                      </h4>
                      <p className="text-gray-400 text-sm">
                        Projects Completed
                      </p>
                    </div>
                    <div className="bg-gray-800/50 rounded-xl p-4 border border-purple-500/10 hover:border-purple-500/30 transition-colors duration-300">
                      <h4 className="text-xl font-bold text-purple-400 mb-1">
                        1+
                      </h4>
                      <p className="text-gray-400 text-sm">Years Experience</p>
                    </div>
                    <div className="bg-gray-800/50 rounded-xl p-4 border border-purple-500/10 hover:border-purple-500/30 transition-colors duration-300">
                      <h4 className="text-xl font-bold text-purple-400 mb-1">
                        20000+
                      </h4>
                      <p className="text-gray-400 text-sm">Happy Clients</p>
                    </div>
                  </motion.div>
                </motion.div>
              )}

              {(activeTab === "experience" || activeTab === "education") && (
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="relative"
                >
                  {/* Timeline line */}
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>

                  <div className="space-y-8 relative">
                    {filteredItems.map((item) => (
                      <motion.div
                        key={item.id}
                        variants={itemVariants}
                        className="pl-12 relative"
                      >
                        {/* Timeline dot */}
                        <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center shadow-lg shadow-purple-500/20">
                          {getIconComponent(item.icon)}
                        </div>

                        <div className="bg-gray-800/30 rounded-xl p-6 border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/5">
                          <div className="flex flex-wrap justify-between items-start mb-2">
                            <h4 className="text-xl font-bold text-white">
                              {item.title}
                            </h4>
                            <span className="text-sm font-medium px-3 py-1 bg-purple-900/30 rounded-full text-purple-300">
                              {item.date}
                            </span>
                          </div>
                          <h5 className="text-lg text-gray-300 mb-2">
                            {item.organization}
                          </h5>
                          {item.location && (
                            <div className="flex items-center text-gray-400 mb-3 text-sm">
                              <MapPin className="w-4 h-4 mr-1" />
                              {item.location}
                            </div>
                          )}
                          <p className="text-gray-400">{item.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* <motion.div variants={itemVariants} className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-white">
                My Skills
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <span className="px-4 py-2 bg-purple-900/30 rounded-full text-purple-300 text-sm text-center">
                  Next.js
                </span>
                <span className="px-4 py-2 bg-blue-900/30 rounded-full text-blue-300 text-sm text-center">
                  TypeScript
                </span>
                <span className="px-4 py-2 bg-green-900/30 rounded-full text-green-300 text-sm text-center">
                  Three.js
                </span>
                <span className="px-4 py-2 bg-cyan-900/30 rounded-full text-cyan-300 text-sm text-center">
                  Tailwind CSS
                </span>
                <span className="px-4 py-2 bg-yellow-900/30 rounded-full text-yellow-300 text-sm text-center">
                  WebGL
                </span>
                <span className="px-4 py-2 bg-pink-900/30 rounded-full text-pink-300 text-sm text-center">
                  Framer Motion
                </span>
                <span className="px-4 py-2 bg-indigo-900/30 rounded-full text-indigo-300 text-sm text-center">
                  React
                </span>
                <span className="px-4 py-2 bg-red-900/30 rounded-full text-red-300 text-sm text-center">
                  GSAP
                </span>
                <span className="px-4 py-2 bg-orange-900/30 rounded-full text-orange-300 text-sm text-center">
                  UI/UX Design
                </span>
              </div>
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
