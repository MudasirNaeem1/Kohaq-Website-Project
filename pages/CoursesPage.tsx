
import React, { useState } from 'react';
import { MOCK_COURSES } from '../constants';
import CourseCard from '../components/CourseCard';
import { Search, ChevronDown } from 'lucide-react';

const categories = ['All', 'Web Development', 'Backend', 'Design', 'Data Science', 'DevOps', 'Marketing'];
const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];
const prices = ['All', 'Paid', 'Free'];

const CoursesPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    
    // In a real app, these filters would be part of state and used to filter courses
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedLevel, setSelectedLevel] = useState('All');
    const [selectedPrice, setSelectedPrice] = useState('All');

    const filteredCourses = MOCK_COURSES.filter(course => 
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedCategory === 'All' || course.category === selectedCategory) &&
        (selectedLevel === 'All' || course.level === selectedLevel) &&
        (selectedPrice === 'All' || (selectedPrice === 'Free' && course.price === 'Free') || (selectedPrice === 'Paid' && typeof course.price === 'number'))
    );

    return (
        <div className="bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-neutral-900">Kohaq Learn</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-neutral-600">
                        Find the perfect course to boost your skills and advance your career.
                    </p>
                </div>

                {/* Filters and Search */}
                <div className="mb-10 p-6 bg-neutral-100 rounded-lg shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
                        <div className="relative col-span-1 lg:col-span-2">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                            <input
                                type="text"
                                placeholder="Search for courses..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 rounded-md border border-neutral-300 focus:ring-primary focus:border-primary"
                            />
                        </div>
                        <FilterDropdown label="Category" options={categories} selected={selectedCategory} setSelected={setSelectedCategory} />
                        <FilterDropdown label="Level" options={levels} selected={selectedLevel} setSelected={setSelectedLevel} />
                    </div>
                </div>

                {/* Course Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {filteredCourses.length > 0 ? (
                        filteredCourses.map(course => <CourseCard key={course.id} course={course} />)
                    ) : (
                        <div className="col-span-full text-center py-20">
                            <h3 className="text-2xl font-semibold text-neutral-700">No courses found</h3>
                            <p className="mt-2 text-neutral-500">Try adjusting your search or filters.</p>
                        </div>
                    )}
                </div>

                {/* Pagination (placeholder) */}
                <div className="mt-16 flex justify-center">
                    <nav className="flex items-center space-x-2">
                        <button className="px-4 py-2 rounded-md bg-primary text-white font-medium">1</button>
                        <button className="px-4 py-2 rounded-md hover:bg-neutral-200 font-medium">2</button>
                        <button className="px-4 py-2 rounded-md hover:bg-neutral-200 font-medium">3</button>
                        <span className="px-2">...</span>
                        <button className="px-4 py-2 rounded-md hover:bg-neutral-200 font-medium">10</button>
                    </nav>
                </div>
            </div>
        </div>
    );
};


// A helper component for dropdowns, defined within the page file scope
const FilterDropdown: React.FC<{label: string, options: string[], selected: string, setSelected: (value: string) => void}> = ({label, options, selected, setSelected}) => {
    return (
        <div className="relative">
            <select
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
                className="w-full appearance-none bg-white px-4 py-3 rounded-md border border-neutral-300 focus:ring-primary focus:border-primary"
            >
                {options.map(opt => <option key={opt} value={opt}>{opt === 'All' ? `All ${label}s` : opt}</option>)}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 pointer-events-none" />
        </div>
    );
}

export default CoursesPage;