import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="px-5 lg:px-28 flex justify-between flex-col lg:flex-row" id="about">
      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
        viewport={{ once: true }}
      >
        <img src="/assets/about-me.svg" alt="About Me Illustration" />
      </motion.div>

      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="lg:text-4xl text-2xl mt-4 lg:mt-0">
          About <span className="font-extrabold">Me</span>
        </h2>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-5 lg:mt-10">
          I'm a passionate student specializing in Artificial Intelligence and Machine Learning. My core enthusiasm lies in developing data-driven models, deep learning algorithms, and conducting scientific research to solve real-world problems.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
My journey is defined by a strong focus on AI, evidenced by my scholarship-funded training and published research. While my primary expertise is in Data Science, I also approach web development with a modern, efficiency-first mindset. I leverage Figma for design and AI assistants like GitHub Copilot to rapidly prototype and build web interfaces, allowing me to focus on integrating powerful AI backends.        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
When I'm not training models or coding, you can find me solving algorithmic challenges on LeetCode, exploring the latest research papers, or enjoying video games.        </p>
      </motion.div>
    </div>
  );
}
