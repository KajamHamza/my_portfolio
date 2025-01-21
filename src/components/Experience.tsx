/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { cn } from "@/lib/utils"; // Ensure you have this utility for class merging

const experiences = [
  {
    company: "Maroc Telecom (Intern)",
    role: "Network Administrator",
    period: "Jun 2023 - Jul 2023",
    logo: "/images/maroc-telecom.png", // Replace with actual logo path
  },
  {
    company: "NATIONAL CENTER FOR NUCLEAR ENERGY, SCIENCE AND TECHNOLOGY (Intern)",
    role: "Java Developer",
    period: "Jun 2022 - Jul 2022",
    logo: "/images/cnesten.png", // Replace with actual logo path
  },
];

const generateRandomString = (length: number) => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

const CardPattern = ({ mouseX, mouseY, randomString }: any) => {
  const maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50"></div>
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 to-blue-700 opacity-0 group-hover/card:opacity-100 backdrop-blur-xl transition duration-500"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay group-hover/card:opacity-100"
        style={style}
      >
        <p className="absolute inset-x-0 text-xs h-full break-words whitespace-pre-wrap text-white font-mono font-bold transition duration-500">
          {randomString}
        </p>
      </motion.div>
    </div>
  );
};

const EvervaultCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [randomString, setRandomString] = useState("");

  useEffect(() => {
    const str = generateRandomString(1500);
    setRandomString(str);
  }, []);

  const onMouseMove = ({ currentTarget, clientX, clientY }: any) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);

    const str = generateRandomString(1500);
    setRandomString(str);
  };

  return (
    <div
      className={cn(
        "p-0.5 bg-transparent flex items-center justify-center w-full h-full relative",
        className
      )}
    >
      <div
        onMouseMove={onMouseMove}
        className="group/card rounded-xl w-full relative overflow-hidden bg-gray-900/20 backdrop-blur-lg border border-gray-800/20 flex items-center justify-center h-full"
      >
        <CardPattern mouseX={mouseX} mouseY={mouseY} randomString={randomString} />
        <div className="relative z-10 flex items-center justify-center w-full h-full p-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default function Experience() {
  return (
    <section className="space-y-4 animate-fade-in">
      <h2 className="text-lg font-medium">Experience</h2>
      <p className="text-zinc-400 mb-6">I specialize in full-stack development, cloud computing, and creating scalable, user-friendly applications.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {experiences.map((exp, index) => (
          <EvervaultCard key={index}>
            <div className="flex items-center gap-4 w-full">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white/5 flex-shrink-0">
                <Image
                  src={exp.logo || "/placeholder.svg"}
                  alt={exp.company}
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-medium">{exp.role}</h3>
                <p className="text-sm text-zinc-400">{exp.company}</p>
                <p className="text-sm text-zinc-500">{exp.period}</p>
              </div>
            </div>
          </EvervaultCard>
        ))}
      </div>
    </section>
  );
}