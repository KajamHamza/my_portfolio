'use client';
import Image from "next/image";
import { MessageSquare, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactForm from "./ContactForm";
import { useState } from "react";
import { motion } from "framer-motion";
import { TextAnimate } from "./ui/text-animate";
import toast from "react-hot-toast";

export default function Profile() {
  const [showContactForm, setShowContactForm] = useState(false);

  // Glossy transparent toast style
  const glossyToastStyle = {
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    color: "#FFFFFF",
    borderRadius: "12px",
    padding: "12px 20px",
  };

  return (
    <section className="flex flex-col md:flex-row items-center gap-6 animate-fade-in">
      {/* Profile Picture */}
      <div className="relative group">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-black/50 backdrop-blur-lg shadow-glow">
          <Image
            src="/images/profile.png"
            alt="Profile"
            width={128}
            height={128}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Creative Hover Bubble with "Hello" */}
        <motion.div
          className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          whileHover={{ scale: 1.1 }}
        >
          <div className="bg-gray-900/70 backdrop-blur-lg border border-gray-800/20 rounded-lg px-3 py-1.5 text-sm text-white shadow-lg flex items-center gap-2">
            <span className="text-green-400">✌🏻</span>
            <span>log(&quot;Hello&quot;)</span>
          </div>
          {/* Tail for the bubble */}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-gray-900/70 backdrop-blur-lg border-l border-b border-gray-800/20 transform rotate-45"></div>
        </motion.div>

        {/* Available Section with Hover Border Gradient */}
        <motion.div
          className="absolute -bottom-2 -right-2 flex items-center bg-green backdrop-blur-sm rounded-full py-1 px-2"
          whileHover={{ scale: 1.2 }}
        >
          <div className="relative w-3 h-3">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-green-600 p-[2px]">
              <div className="bg-green-900/70 backdrop-blur-sm rounded-full w-full h-full"></div>
            </div>
          </div>
          <span className="ml-2 text-xs text-green-400 font-medium">Available</span>
        </motion.div>
      </div>

      {/* Profile Details */}
      <div className="flex-1">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-semibold">
              <TextAnimate animation="blurInUp" by="character">
                El Kajam Hamza
              </TextAnimate>
            </h1>
            {/* Verified Badge */}
            <div className="relative w-7 h-7">
              <div className="absolute inset-0 bg-blue-500/70 backdrop-blur-lg rounded-full border border-blue-600/20"></div>
              <div className="absolute inset-0.5 bg-white rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-blue-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
                    fill="currentColor"
                  />
                  <path
                    d="M16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
          <p className="text-zinc-400">Software Engineer Student</p>
        </div>
      </div>

      {/* Message and CV Buttons */}
      <div className="flex items-center gap-2">
        {/* Message Button */}
        <Button
          variant="outline"
          className="backdrop-blur-lg bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300"
          onClick={() => setShowContactForm(true)}
        >
          <MessageSquare className="w-4 h-4 mr-2" />
          Message
        </Button>

        {/* CV Button */}
        <a
          href="/EL-Kajam-Hamza-Resume (2).pdf"
          download="EL-Kajam-Hamza-Resume.pdf"
          className="backdrop-blur-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 flex items-center gap-2 px-4 py-2 rounded-lg text-sm"
          onClick={() => {
            toast.success("CV downloaded successfully!", {
              duration: 4000,
              position: "bottom-left",
              style: glossyToastStyle,
            });
          }}
        >
          <Download className="w-4 h-4" />
          My CV
        </a>
      </div>

      {/* Contact Form */}
      {showContactForm && <ContactForm onClose={() => setShowContactForm(false)} />}
    </section>
  );
}