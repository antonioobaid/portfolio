"use client";
import React, { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { Project } from "@/types/types";
import emailjs from "@emailjs/browser";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { FaReact, FaDatabase, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const projects: Project[] = [
  {
    title: "ChiqueButik",
    description: "An e-commerce project built with Next.js, Tailwind CSS, and Firebase.",
    github: "https://github.com/antonioobaid/chiquebutik",
    live: "https://chiquebutik-antonio.vercel.app",
    images: ["/images/chiquebutik.png", "/images/chiquebutik1.png" , "/images/chiquebutik2.png" , "/images/chiquebutik3.png"],
  },
  {
    title: "kopia-av-Airbnb",
    description: "A full-stack project using Next.js, Tailwind, Supabase and Clerk.",
    github: "https://github.com/antonioobaid/kopia-av-Airbnb",
    live: "https://airbnb-clone-antonio.vercel.app",
    images: ["/images/kopia-av-airbnb.png" , "/images/kopia-av-airbnb1.png" , "/images/kopia-av-airbnb2.png" , "/images/kopia-av-airbnb3.png"],
  },
];

const Home: React.FC = () => {
  const [formData, setFormData] = useState({
    subject: "",
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_lzzd864",
        "template_teverag",
        {
          subject: formData.subject || "Contact from portfolio website",
          from_name: formData.name,
          email: formData.email,
          time: new Date().toLocaleString(),
          message: formData.message,
        },
        "aCDdUc5EkVL3xovUm"
      )
      .then(() => {
        setStatus("✅ Message sent successfully!");
        setFormData({ subject: "", name: "", email: "", message: "" });
      })
      .catch(() => setStatus("❌ Something went wrong, please try again."));
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500 min-h-screen">
      <Navbar />

      {/* 👇 First intro section (no navbar link) */}
      <section id="intro" className="text-center py-16 flex flex-col items-center gap-6  bg-white dark:bg-gray-800 shadow-inner">
        <img
          src="/images/me.jpg"
          alt="Antonio"
          className="w-40 h-40 rounded-full object-cover shadow-lg"
        />
        <h2 className="text-4xl font-bold mb-2">Hi, I'm Antonio</h2>
        <p className="max-w-xl text-gray-700 dark:text-gray-300">
          Frontend developer with experience in Next.js, React, Tailwind CSS, Firebase, Supabase, and building full-stack applications.
        </p>
      </section>

      <section id="projects" className="py-16 px-6   ">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section id="about" className="py-16 text-center px-6 bg-white dark:bg-gray-800 shadow-inner">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="max-w-2xl mx-auto mb-8 text-gray-700 dark:text-gray-300">
            I’m passionate about front-end development, user experience, and turning complex problems into simple, beautiful, and intuitive designs.  
            I love working with modern technologies like <strong>Next.js</strong>, <strong>React</strong>, and <strong>Firebase</strong>.
          </p>

          <div className="flex justify-center gap-6 text-blue-600 dark:text-blue-400 text-4xl mb-8">
            <FaReact title="React" />
            <FaDatabase title="Firebase / Supabase" />
            <FaEnvelope title="Contact" />
          </div>

          {/* Social media links */}
          <div className="flex justify-center gap-6 text-lg font-medium">
            <a
              href="https://github.com/antonioobaid"
              target="_blank"
              className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600"
            >
              <FaGithub className="text-2xl" /> GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/tony-obaid-5535b1133"
              target="_blank"
              className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600"
            >
              <FaLinkedin className="text-2xl" /> LinkedIn
            </a>

            <a
              href="https://instagram.com/abo_george"
              target="_blank"
              className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-pink-500"
            >
              <i className="fab fa-instagram text-2xl"></i> Instagram
            </a>

            <a
              href="https://facebook.com/tonyobaid"
              target="_blank"
              className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-700"
            >
              <i className="fab fa-facebook text-2xl"></i> Facebook
            </a>
          </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="text-center py-16">
        <h2 className="text-3xl font-bold mb-6">Kontakta mig</h2>
        <form
          onSubmit={handleSubmit}
          className="mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 w-full max-w-md"
        >
          <label className="block mb-4">
            <span className="text-gray-700 dark:text-gray-300">Subject</span>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="What is this about?"
              required
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white p-2"
            />
          </label>

          <label className="block mb-4">
            <span className="text-gray-700 dark:text-gray-300">Name</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white p-2"
            />
          </label>

          <label className="block mb-4">
            <span className="text-gray-700 dark:text-gray-300">Email</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white p-2"
            />
          </label>

          <label className="block mb-4">
            <span className="text-gray-700 dark:text-gray-300">Message</span>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white p-2"
            />
          </label>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Send
          </button>

          {status && <p className="mt-4 text-center">{status}</p>}
        </form>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
