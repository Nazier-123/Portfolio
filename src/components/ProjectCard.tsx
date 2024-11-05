import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, tags, link }) => {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden group hover:transform hover:scale-105 transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-700 text-sm rounded-full text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
        >
          View Project <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;