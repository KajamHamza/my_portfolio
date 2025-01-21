"use client";

import { useState } from "react";
import { MapPin, Linkedin, Github } from "lucide-react";

export default function About() {
  const [expanded, setExpanded] = useState(false);

  const fullText = [
    `I'm a Software Engineering student at the International University of Rabat, 
     with a knack for turning ideas into functional, user-friendly applications. 
     Whether it's crafting sleek frontend interfaces or building robust backend systems, 
     I love the thrill of solving problems and creating solutions that make a real impact.`,

    `I’m passionate about building things that matter whether it’s a web app that 
     simplifies workflows, a platform that connects people, or a tool that makes life 
     a little easier. My journey in tech has been a mix of curiosity, late-night coding 
     sessions, and a whole lot of coffee.`,

    `I’ve dived into everything from full-stack development to cloud computing, 
     and I’m always eager to learn more. I believe in the power of clean code, 
     intuitive design, and scalable solutions. Plus, I’m a firm believer that 
     the best tech is built with both logic and creativity.`,

    `When I’m not coding, you’ll probably find me exploring new tech trends, 
     tinkering with personal projects, or brainstorming ways to make the digital 
     world a better place. I’m a problem solver at heart, and I’m always up for 
     a challenge whether it’s debugging a tricky piece of code or designing a 
     seamless user experience.`,

    `I’m on a mission to create software that’s not just functional, but also 
     delightful to use. If you’re looking for someone who’s passionate, detail oriented, 
     and always ready to learn, let’s connect and build something amazing together!`,
  ];

  const shortText = fullText.slice(0, 3);

  return (
    <section className="space-y-6 md:space-y-8 lg:space-y-10 animate-fade-in">
      {/* Increased spacing for larger screens */}
      <h2 className="text-lg font-medium">About me</h2>
      <div className="grid md:grid-cols-[2fr,1fr] gap-8 md:gap-12 lg:gap-16">
        {/* Text Section */}
        <div className="space-y-6 md:space-y-8 lg:space-y-10">
          {/* Increased spacing for larger screens */}
          <div className="text-zinc-400 space-y-6 md:space-y-8 lg:space-y-10">
            {/* Increased spacing for larger screens */}
            {(expanded ? fullText : shortText).map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <button
            className="text-zinc-400 hover:text-white transition-colors duration-300"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "See less" : "See more"}
          </button>
        </div>

        {/* Links Section */}
        <div className="space-y-8 md:space-y-10 lg:space-y-12">
          {/* Increased spacing for larger screens */}
          {/* Location */}
          <div>
            <h3 className="text-sm font-medium mb-2">Location</h3>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors duration-300"
            >
              <MapPin className="w-4 h-4" />
              Témara, MA
            </a>
          </div>

          {/* GitHub */}
          <div>
            <h3 className="text-sm font-medium mb-2">GitHub</h3>
            <a
              href="https://github.com/KajamHamza"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors duration-300"
            >
              <Github className="w-4 h-4" />
              Repos
            </a>
          </div>

          {/* LinkedIn */}
          <div>
            <h3 className="text-sm font-medium mb-2">LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/el-kajam-hamza-73682a22a/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors duration-300"
            >
              <Linkedin className="w-4 h-4" />
              Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}