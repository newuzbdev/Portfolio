"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type Skill = {
  name: string;
  level: number;
  color: string;
};

export default function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const frontendSkills: Skill[] = [
    { name: "React / Next.js", level: 95, color: "from-blue-500 to-cyan-500" },
    { name: "TypeScript", level: 90, color: "from-blue-600 to-blue-400" },
    {
      name: "Three.js / WebGL",
      level: 85,
      color: "from-purple-600 to-purple-400",
    },
    { name: "Tailwind CSS", level: 92, color: "from-cyan-500 to-teal-500" },
    { name: "Framer Motion", level: 88, color: "from-pink-500 to-purple-500" },
  ];

  const otherSkills: Skill[] = [
    { name: "UI/UX Design", level: 85, color: "from-pink-500 to-rose-500" },
    { name: "Node.js", level: 80, color: "from-green-500 to-emerald-500" },
    { name: "GraphQL", level: 75, color: "from-pink-600 to-pink-400" },
    { name: "Docker", level: 70, color: "from-blue-500 to-blue-300" },
    { name: "AWS", level: 65, color: "from-yellow-500 to-amber-500" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-gray-900 to-black"
      ref={ref}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl font-semibold mb-6 text-center md:text-left text-white"
            >
              Frontend Development
            </motion.h3>

            <motion.div
              variants={container}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="space-y-6"
            >
              {frontendSkills.map((skill, index) => (
                <motion.div key={index} variants={item}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.4 + index * 0.1 }}
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl font-semibold mb-6 text-center md:text-left text-white"
            >
              Other Skills
            </motion.h3>

            <motion.div
              variants={container}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="space-y-6"
            >
              {otherSkills.map((skill, index) => (
                <motion.div key={index} variants={item}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.4 + index * 0.1 }}
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 p-8 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-2xl border border-purple-500/10"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">1+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">10+</div>
              <div className="text-gray-400">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">
                2000+
              </div>
              <div className="text-gray-400">Happy Clients</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
