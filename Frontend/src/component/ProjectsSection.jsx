import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);
  const GITHUB_USERNAME = "your-github-username"; // Replace with your GitHub username

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/users/shubhampund9325/repos`
        );
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching GitHub repositories:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="px-6 py-12 bg-black bg-opacity-50">
      <h2 className="text-2xl font-semibold text-center mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.length > 0 ? (
          projects.map((project) => (
            <motion.div
              key={project.id}
              className="p-4 glass-effect rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-bold mb-2">{project.name}</h3>
              <p className="text-sm text-gray-400">
                {project.description || "No description provided."}
              </p>
              <div className="mt-4 flex space-x-4">
                {project.homepage && (
                  <a
                    href={project.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-500 hover:text-cyan-400"
                  >
                    Demo
                  </a>
                )}
                <a
                  href={project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-500 hover:text-cyan-400"
                >
                  GitHub
                </a>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Tech Stack: {project.language || "Not specified"}
              </p>
            </motion.div>
          ))
        ) : (
          <p className="text-center text-gray-400">Loading projects...</p>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;