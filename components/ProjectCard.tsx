
import React from 'react';
import type { Project } from '../types';
import Card from './common/Card';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card>
      <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-neutral-900">{project.title}</h3>
        <p className="text-sm font-medium text-primary mt-1">{project.interns.join(', ')}</p>
        <p className="mt-3 text-neutral-600 text-sm">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.map(tech => (
            <span key={tech} className="px-2 py-1 text-xs font-medium bg-neutral-200 text-neutral-700 rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="p-6 border-t border-neutral-200 flex items-center justify-end space-x-4">
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-primary transition-colors">
            <Github size={20} />
          </a>
        )}
        {project.projectUrl && (
          <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-primary transition-colors">
            <ExternalLink size={20} />
          </a>
        )}
      </div>
    </Card>
  );
};

export default ProjectCard;