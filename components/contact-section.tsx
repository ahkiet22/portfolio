"use client";

import { useState } from "react";
import { Divider } from "./Divider";
import { Icon } from "@iconify/react";

const socialLinks = [
  { href: "https://github.com/yourusername", label: "GitHub" },
  { href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
  { href: "https://twitter.com/yourusername", label: "Twitter" },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Gửi dữ liệu lên API hoặc email
    console.log(formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="container-layout contact-section text-white mb-10">
      <h2 className="text-4xl font-bold text-center mb-10">Contact Me</h2>
      <Divider />
      <div className="flex flex-col md:flex-row gap-12 md:gap-20">
        <div className="flex-1 flex flex-col justify-center items-start gap-y-12">
          <div className="flex items-center gap-3">
            <Icon icon="material-symbols:location-on" width={40} height={40} />
            <span>Ho Chi Minh City, Vietnam</span>
          </div>
          <div className="flex items-center gap-3">
            <Icon icon="mdi:phone" width={40} height={40} />
            <span>+84 123 456 789</span>
          </div>
          <div className="flex items-center gap-3">
            <Icon icon="mdi:email" width={40} height={40} />
            <span>lekiett2201@gmail.com</span>
          </div>
        </div>
        <form
          className="flex-1 flex flex-col gap-4 rounded-lg"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="p-3 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 h-32 resize-none"
            required
          />
          <button
            type="submit"
            className="mt-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 rounded-md transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
