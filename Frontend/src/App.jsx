import './App.css';
import SkillsSection from './component/SkillsSection.jsx';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './component/Navbar.jsx';
import ProfilePhoto from './photo.jpg'; // Ensure the path is relative to your project
import ProjectsSection from './component/ProjectsSection.jsx';
import Footer from './component/Footer.jsx';
const App = () => {
  const [showBio, setShowBio] = useState(true);
  const sentence = "I’m a final-year IT student specializing in web development and machine learning. I enjoy solving complex problems and constantly strive to learn and grow in the tech world.";

  // Splitting the sentence into individual characters for animation
  const sentenceArray = sentence.split("");

  return (
    <div className="font-poppins bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Section */}
      <main className="pt-24">
        {/* Profile Section */}
        <section
          id="home"
          className="flex flex-col items-center justify-center text-center px-4 py-12"
        >
          {/* Profile Photo */}
          <motion.img
            src={ProfilePhoto} // Use the imported image directly
            alt="Profile"
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 rounded-full shadow-lg object-cover"
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ duration: 0.5 }}
          />
          <h1 className="text-3xl mt-4 font-semibold">Shubham Pund</h1>
          <p className="text-sm text-gray-400 mt-2">
            Software Engineer | Content Creator
          </p>
          <section id="about" className=" px-6 py-18 text-center bg-transparent bg-opacity-70">
      <h2 className="text-3xl font-semibold mb-6">About Me</h2>
      <motion.div
  className="w-full max-w-4xl mx-auto px-4 text-center" // Constrain the width and center-align text
>
  <motion.p
    className="text-xl md:text-2xl lg:text-3xl text-gray-400 mt-4 leading-relaxed break-words" // Responsive font size
    initial="hidden"
    animate="visible"
    variants={{
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.04, // Delay between each character animation
        },
      },
    }}
  >
    {sentenceArray.map((char, index) => (
      <motion.span
        key={index}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ))}
  </motion.p>
</motion.div>
    </section>
          {/* Toggle Bio/Skills */}
          <SkillsSection />
        </section>

        {/* Projects Section */}
        <ProjectsSection />

        {/* About Section */}
        {/* <section id="about" className="px-6 py-12 text-center bg-black bg-opacity-70">
          <h2 className="text-2xl font-semibold">About Me</h2>
          <p className="text-gray-400 mt-4">
            I’m a final-year IT student specializing in web development and
            machine learning. I enjoy solving complex problems and constantly
            strive to learn and grow in the tech world.
          </p>
        </section> */}
        
      </main>

      {/* Footer */}
      <Footer />
     
    </div>
  );
};

export default App;