/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import toast from "react-hot-toast";

const glossyToastStyle = {
  background: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  color: "#FFFFFF",
  borderRadius: "12px",
  padding: "12px 20px",
};


const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function ContactForm({ onClose }: { onClose: () => void }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      const result = await response.json();
      console.log(result);

      // Show success toast
      toast.success("Message sent successfully!", {
        duration: 4000,
        position: "top-center",
        style: glossyToastStyle,
      });

      setIsSuccess(true);
      setTimeout(() => {
        onClose();
      }, 2000); // Close the form after 2 seconds
    } catch (error) {
      console.error(error);

      // Show error toast
      toast.error("Failed to send message. Please try again.", {
        duration: 4000,
        position: "top-center",
        style: glossyToastStyle,
      });

      setError("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-lg flex items-center justify-center z-50">
      {/* Noise Overlay */}
      <div className="fixed inset-0 bg-noise opacity-[0.03] pointer-events-none" />

      {/* Frosted Glass Container */}
      <div className="bg-gray-900/30 backdrop-blur-lg border border-gray-800/20 rounded-lg p-6 w-full max-w-md shadow-2xl relative z-10">
        <h2 className="text-2xl font-bold mb-4 text-white">Contact Me</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }: { field: any }) => (
                <FormItem>
                  <FormLabel className="text-gray-300">Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your name"
                      {...field}
                      className="bg-gray-800/20 border border-gray-700/30 text-white placeholder-gray-400 focus:border-gray-500 focus:ring-2 focus:ring-gray-500/30"
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }: { field: any }) => (
                <FormItem>
                  <FormLabel className="text-gray-300">Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your email"
                      {...field}
                      className="bg-gray-800/20 border border-gray-700/30 text-white placeholder-gray-400 focus:border-gray-500 focus:ring-2 focus:ring-gray-500/30"
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }: { field: any }) => (
                <FormItem>
                  <FormLabel className="text-gray-300">Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Your message"
                      {...field}
                      className="bg-gray-800/20 border border-gray-700/30 text-white placeholder-gray-400 focus:border-gray-500 focus:ring-2 focus:ring-gray-500/30"
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />
            <div className="flex justify-end space-x-2">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="bg-gray-800/20 border border-gray-700/30 text-white hover:bg-gray-700/30"
                disabled={isLoading}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="bg-gray-800/20 border border-gray-700/30 text-white hover:bg-gray-700/30 focus:ring-2 focus:ring-gray-500/30"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}