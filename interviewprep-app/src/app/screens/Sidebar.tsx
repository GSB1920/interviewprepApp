"use client";

import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";

const technologies = [
  "React",
  "Next.js",
  "Tailwind CSS",
  "TypeScript",
  "Node.js",
  "GraphQL",
  "Docker",
];

function TechList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-2">
      {items.map((tech) => (
        <li
          key={tech}
          className="font-semibold text-black hover:text-blue-600 cursor-pointer transition-colors duration-200"
        >
          {tech}
        </li>
      ))}
    </ul>
  );
}

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`flex flex-col h-screen bg-white shadow-lg border-r border-gray-200 transition-all duration-300 ${
        isOpen ? "w-64" : "w-16"
      }`}
    >
      {/* Toggle button */}
      <div className="flex justify-end p-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          {isOpen ? (
            <XMarkIcon className="h-6 w-6 text-black" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-black" />
          )}
        </button>
      </div>

      {/* Sidebar content */}
      {isOpen && (
        <div className="px-4 mt-4">
          <h2 className="text-xl font-bold text-black">Technologies</h2>
          <TechList items={technologies} />
        </div>
      )}
    </div>
  );
}