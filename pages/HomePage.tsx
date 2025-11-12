
import React from 'react';
import { NavLink } from 'react-router-dom';
import { MOCK_COURSES, MOCK_JOBS, MOCK_PROJECTS } from '../constants';
import CourseCard from '../components/CourseCard';
import JobCard from '../components/JobCard';
import ProjectCard from '../components/ProjectCard';
import { ArrowRight, BookOpen, Briefcase, Lightbulb } from 'lucide-react';

const HomePage: React.FC = () => {
    return (
        <div className="space-y-24 pb-24">
            {/* Hero Section */}
            <section className="bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-neutral-900 tracking-tight">
                        Your Future, <span className="text-primary">Accelerated</span>.
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-neutral-600">
                        Kohaq is the ultimate platform where learning meets opportunity. Master new skills, showcase your projects, and land your dream job.
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
                        <NavLink to="/learn" className="w-full sm:w-auto px-8 py-4 text-lg font-semibold text-white bg-primary rounded-full hover:bg-primary-dark shadow-lg transition-all transform hover:scale-105">
                            Explore Courses
                        </NavLink>
                        <NavLink to="/careers" className="w-full sm:w-auto px-8 py-4 text-lg font-semibold text-primary bg-primary/10 rounded-full hover:bg-primary/20 transition-colors">
                            Find a Job
                        </NavLink>
                    </div>
                </div>
            </section>

            {/* Featured Courses */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl font-bold text-neutral-900">Featured Courses</h2>
                    <NavLink to="/learn" className="flex items-center text-primary font-semibold hover:underline">
                        View All <ArrowRight className="ml-2 h-5 w-5" />
                    </NavLink>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {MOCK_COURSES.slice(0, 3).map(course => <CourseCard key={course.id} course={course} />)}
                </div>
            </section>

            {/* Why Kohaq? */}
            <section className="bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <h2 className="text-3xl font-bold text-center text-neutral-900">Why Kohaq?</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-center text-lg text-neutral-600">
                        We provide an integrated ecosystem to support every step of your career journey.
                    </p>
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        <div className="flex flex-col items-center">
                            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary">
                                <BookOpen size={32} />
                            </div>
                            <h3 className="mt-6 text-xl font-bold">Learn In-Demand Skills</h3>
                            <p className="mt-2 text-neutral-600">Access expert-led courses on the latest technologies and industry trends.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-secondary/10 text-secondary">
                                <Lightbulb size={32} />
                            </div>
                            <h3 className="mt-6 text-xl font-bold">Showcase Your Talent</h3>
                            <p className="mt-2 text-neutral-600">Build and share innovative projects in Kohaq Labs to impress employers.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-accent/10 text-accent">
                                <Briefcase size={32} />
                            </div>
                            <h3 className="mt-6 text-xl font-bold">Connect with Companies</h3>
                            <p className="mt-2 text-neutral-600">Apply for exclusive internships and jobs from our network of partner companies.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Recent Jobs */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl font-bold text-neutral-900">Recent Job Openings</h2>
                    <NavLink to="/careers" className="flex items-center text-primary font-semibold hover:underline">
                        View All <ArrowRight className="ml-2 h-5 w-5" />
                    </NavLink>
                </div>
                <div className="space-y-6">
                    {MOCK_JOBS.slice(0, 3).map(job => <JobCard key={job.id} job={job} />)}
                </div>
            </section>
            
            {/* Top Projects */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl font-bold text-neutral-900">Top Intern Projects</h2>
                    <NavLink to="/labs" className="flex items-center text-primary font-semibold hover:underline">
                        View All <ArrowRight className="ml-2 h-5 w-5" />
                    </NavLink>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {MOCK_PROJECTS.slice(0, 2).map(project => <ProjectCard key={project.id} project={project} />)}
                </div>
            </section>
        </div>
    );
};

export default HomePage;