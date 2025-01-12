import { motion } from 'framer-motion';
import React from 'react';
import { FaJs, FaReact, FaDocker, FaPython, FaGit } from 'react-icons/fa'; // Importing icons

const skills = [
  { name: 'JavaScript', level: 'Advanced', progress: 90, icon: <FaJs /> },
  { name: 'React', level: 'Intermediate', progress: 70, icon: <FaReact /> },
  { name: 'Node.js', level: 'Beginner', progress: 40, icon: <FaReact /> }, // Replace with Node.js icon if available
  { name: 'Machine Learning', level: 'Advanced', progress: 85, icon: <FaPython /> },
  { name: 'Python', level: 'Intermediate', progress: 65, icon: <FaPython /> },
  { name: 'Cloud Computing', level: 'Intermediate', progress: 60, icon: <FaDocker /> },
  { name: 'Docker', level: 'Beginner', progress: 30, icon: <FaDocker /> },
  { name: 'Version Control (Git, GitHub)', level: 'Advanced', progress: 95, icon: <FaGit /> },
];

export default function SkillsSection() {
  const [showBio, setShowBio] = React.useState(true);

  return (
    <div className="mt-6">
      <button
        onClick={() => setShowBio(!showBio)}
        className="bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-400"
      >
        {showBio ? 'View Skills' : 'View Bio'}
      </button>
      <motion.div
        className="mt-4 text-gray-300"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {showBio ? (
          <p>
            Hello! I’m Shubham, passionate about creating innovative solutions in web development and machine
            learning. I love exploring new technologies and turning ideas into reality.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <div key={skill.name} className="bg-opacity-70 bg-gray-800 p-4 rounded-lg space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl text-white">{skill.icon}</span>
                    <h3 className="font-bold text-lg text-white">{skill.name}</h3>
                  </div>
                  <span className="text-sm text-white">{skill.level}</span>
                </div>
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <span className="text-sm text-white">{skill.progress}%</span>
                  </div>
                  <div className="flex mb-4">
                    <div
                      className={`flex-1 h-2 rounded-full ${
                        skill.level === 'Beginner'
                          ? 'bg-red-400'
                          : skill.level === 'Intermediate'
                          ? 'bg-yellow-400'
                          : 'bg-green-400'
                      }`}
                      style={{ width: `${skill.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}