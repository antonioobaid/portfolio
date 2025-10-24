import React from "react";
import { Project } from "../types/types";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 transform transition duration-700 hover:scale-105 hover:shadow-2xl">
      <div className="grid grid-cols-2 gap-2 mb-3">
        {project.images.map((img, index) => (
          <img 
            key={index} 
            src={img} 
            alt={`${project.title} ${index + 1}`} 
            className="rounded-xl w-full h-32 object-cover"
          />
        ))}
      </div>
      <h3 className="text-xl font-bold mt-2">{project.title}</h3>
      <p className="mt-1 text-gray-700">{project.description}</p>
      <div className="mt-2 flex gap-2">
        <a href={project.github} className="text-blue-600 hover:underline">GitHub</a>
        <a href={project.live} className="text-green-600 hover:underline">Live Demo</a>
      </div>
    </div>
  );
};

export default ProjectCard;
