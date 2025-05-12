"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "./animated-list";

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  level: number;
}

const skillsList = [
  {
    name: "React ",
    description: "Frontend framework",
    level: 95,
    icon: "⚛️",
    color: "#61DAFB",
  },
  {
    name: "TypeScript",
    description: "Type-safe JavaScript",
    level: 90,
    icon: "📘",
    color: "#3178C6",
  },
  {
    name: "Next.js ",
    description: "Frontend framework",
    level: 85,
    icon: "🧊",
    color: "#8400FF",
  },
  {
    name: "TanStack Query",
    description: "Data fetching library",
    level: 75,
    icon: "🔍",
    color: "#007ACC",
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first CSS framework",
    level: 92,
    icon: "🎨",
    color: "#06B6D4",
  },
  {
    name: "Framer Motion",
    description: "Animation library",
    level: 88,
    icon: "✨",
    color: "#FF4154",
  },
];

const SkillCard = ({ name, description, icon, color, level }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{level}%</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export default function AnimatedListDemo({
  className,
}: {
  className?: string;
}) {
  const infiniteSkillsList = [...skillsList, ...skillsList, ...skillsList];

  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col overflow-hidden p-2",
        className
      )}
    >
      <AnimatedList>
        {infiniteSkillsList.map((item, idx) => (
          <SkillCard {...item} key={idx} />
        ))}
      </AnimatedList>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
    </div>
  );
}
