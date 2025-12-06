import React, { useState } from 'react';
import { TbExternalLink } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "Auto jump flappybird",
    description: "A Flappy Bird game implementation using Q-Learning reinforcement learning algorithm to train an AI agent to play the game autonomously.",
    image: "/assets/project1.png",
    demoLink: "https://github.com/dinhxuanhuy/AutoFlapBird-with-ReinforcementLearning",
    codeLink: "https://github.com/dinhxuanhuy/AutoFlapBird-with-ReinforcementLearning",
    category: "personal"
  },
  {
    id: 2,
    title: "Vietnamese Movie recommendation System",
    description: "A standard movie recommendation system using collaborative filtering and content-based filtering techniques to provide personalized movie recommendations to users based on their preferences and viewing history.",
    image: "/assets/project1.png",
    demoLink: "https://utepicks.streamlit.app",
    codeLink: "https://github.com/dinhxuanhuy/Movie-Recomendation-Machine-Learning",
    category: "personal"
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with payment integration and user authentication.",
    image: "/assets/project1.png",
    demoLink: "#",
    codeLink: "#",
    category: "personal"
  },
  {
    id: 4,
    title: "Blog Website",
    description: "A responsive blog platform built during web development bootcamp.",
    image: "/assets/project1.png",
    demoLink: "#",
    codeLink: "#",
    category: "course"
  }
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "personal", label: "Personal Projects" },
  { id: "course", label: "Web Dev Course" }
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="bg-black px-5 lg:px-28 py-8 my-8 lg:py-16 lg:my-16" id="projects">
      <h2 className="text-2xl lg:text-4xl text-center text-white">
        My <span className="font-extrabold">Projects</span>
      </h2>

      {/* Category Filter */}
      <div className="flex justify-center gap-4 mt-8 lg:mt-12 flex-wrap">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-6 py-2 rounded-full text-sm lg:text-base font-medium transition-all duration-300 ${
              selectedCategory === category.id
                ? "bg-white text-black"
                : "bg-transparent text-white border border-white hover:bg-white/10"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="lg:mt-16 mt-8 lg:space-y-16 space-y-8 lg:pb-6 pb-3">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`flex justify-between items-center flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 10, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="lg:w-[500px] w-full rounded-2xl overflow-hidden">
              <img
                className="w-full h-full hover:scale-105 transition-all duration-500 cursor-pointer object-cover"
                src={project.image}
                alt={project.title}
              />
            </div>

            <div className="lg:w-1/2 lg:space-y-6 space-y-4">
              <h2 className="font-extrabold text-white mt-5 lg:mt-0 text-3xl lg:text-5xl">
                {String(project.id).padStart(2, "0")}
              </h2>
              <p className="font-bold text-white text-xl lg:text-3xl">{project.title}</p>

              <p className="font-light text-sm/6 lg:text-base text-[#71717A]">
                {project.description}
              </p>
              
              <div className="flex gap-4 mt-4">
                <a 
                  href={project.demoLink} 
                  className="flex items-center gap-2 px-5 py-2.5 bg-white text-black font-medium rounded-lg hover:bg-white/90 transition-all duration-300" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <TbExternalLink size={20} />
                  <span>View Demo</span>
                </a>
                <a 
                  href={project.codeLink} 
                  className="flex items-center gap-2 px-5 py-2.5 bg-transparent text-white font-medium border border-white rounded-lg hover:bg-white/10 transition-all duration-300" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FaGithub size={20} />
                  <span>View Code</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
