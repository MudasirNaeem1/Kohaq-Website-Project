
import React from 'react';
import { MOCK_PROJECTS } from '../constants';
import ProjectCard from '../components/ProjectCard';

const LabsPage: React.FC = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="bg-primary text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Kohaq Labs</h1>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-primary-light/90">
                        Welcome to our innovation hub. Explore groundbreaking projects built by our talented interns, showcasing creativity, technical skill, and real-world problem-solving.
                    </p>
                    <button className="mt-8 px-8 py-3 text-lg font-semibold bg-white text-primary rounded-full hover:bg-neutral-100 shadow-lg transition-all transform hover:scale-105">
                        Submit Your Project
                    </button>
                </div>
            </section>
            
            {/* Projects Gallery */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                 <h2 className="text-3xl font-bold text-neutral-900 mb-10 text-center">Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {MOCK_PROJECTS.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default LabsPage;