"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel"; // Adjust the import path as needed
import { projects } from "@/lib/data"; // Adjust the import path as needed
import Link from "next/link"; // Import Link for navigation
import { motion } from "framer-motion";

export const RecentWork = () => {
  // Map the projects data to Card components
  const cards = projects.map((project, index) => (
    <Card
      key={project.id}
      card={{
        src: project.image,
        title: project.title,
        category: "Project", // You can customize this or add a category field to your projects data
        content: (
          <div className="py-4">
            <p className="text-gray-300 text-base">{project.description}</p>
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block px-6 py-2 backdrop-blur-lg bg-white/5 border border-white/10 text-white rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              View on GitHub
            </a>
          </div>
        ),
      }}
      index={index}
    />
  ));

  // Add the "Check GitHub for More" button as the last item
  const githubButton = (
    <Link
      href="https://github.com/KajamHamza" // Replace with your GitHub URL
      target="_blank"
      rel="noopener noreferrer"
    >
      <motion.button
        className="rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-2xl h-80 w-56 md:h-[40rem] md:w-96 overflow-hidden flex flex-col items-center justify-center relative z-10 hover:bg-white/10 transition-all duration-300"
      >
        <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none" />
        <div className="relative z-40 p-8 flex flex-col items-center justify-center">
          <motion.p className="text-white text-xl md:text-3xl font-semibold text-center [text-wrap:balance] font-sans">
            Check GitHub for More
          </motion.p>
          <motion.p className="text-white text-sm md:text-base font-medium text-center mt-2">
            Explore my projects and contributions on GitHub.
          </motion.p>
        </div>
      </motion.button>
    </Link>
  );

  // Combine the project cards and the GitHub button
  const items = [...cards, githubButton];

  return (
    <div className="w-full h-full py-5">
      <h2 className="text-lg font-medium">Recent work</h2>
      <Carousel items={items} />
    </div>
  );
};

export default RecentWork;