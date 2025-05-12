import { Card, CardContent } from "@/components/ui/card";
// import Image from "next/image";

interface TechCardProps {
  title: string;
  category: string;
  icon: string;
  color: string;
  description: string;
}

export default function TechCard({
  title,
  category,
  // icon,
  color,
  description,
}: TechCardProps) {
  return (
    <Card className="bg-zinc-900 border-zinc-800 overflow-hidden h-full hover:border-zinc-700 transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-start gap-3 mb-4">
          <div
            className="w-10 h-10 flex items-center justify-center rounded"
            style={{ backgroundColor: `${color}20` }}
          >
            (
            <IconPlaceholder color={color} name={title} />)
          </div>
          <div>
            <h3 className="font-semibold text-lg text-white">{title}</h3>
            <p className="text-sm text-gray-400">{category}</p>
          </div>
        </div>
        <p className="text-gray-300 text-sm">{description}</p>
      </CardContent>
    </Card>
  );
}

function IconPlaceholder({ color, name }: { color: string; name: string }) {
  // Extract first letter of each word
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className="w-6 h-6 flex items-center justify-center rounded text-xs font-bold"
      style={{ color }}
    >
      {initials}
    </div>
  );
}
