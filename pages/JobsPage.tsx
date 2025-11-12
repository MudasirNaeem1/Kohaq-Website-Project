
import React, { useState } from 'react';
import { MOCK_JOBS } from '../constants';
import JobCard from '../components/JobCard';
import { Search, MapPin, Briefcase } from 'lucide-react';

const JobsPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [location, setLocation] = useState('');
    const [jobType, setJobType] = useState('All');

    const jobTypes = ['All', 'Full-time', 'Internship', 'Remote', 'Contract'];

    const filteredJobs = MOCK_JOBS.filter(job => 
        (job.title.toLowerCase().includes(searchTerm.toLowerCase()) || job.company.toLowerCase().includes(searchTerm.toLowerCase())) &&
        job.location.toLowerCase().includes(location.toLowerCase()) &&
        (jobType === 'All' || job.type === jobType)
    );

    return (
        <div className="bg-neutral-50 min-h-screen">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-neutral-900">Kohaq Careers</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-neutral-600">
                        Your next career move starts here. Explore opportunities from top companies.
                    </p>
                </div>

                {/* Search Filters */}
                <div className="sticky top-20 bg-neutral-50/80 backdrop-blur-md z-40 py-6 mb-8">
                    <div className="p-4 bg-white rounded-lg shadow-md border border-neutral-200">
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            <div className="relative md:col-span-3 lg:col-span-2">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                                <input
                                    type="text"
                                    placeholder="Job title, keywords, or company"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3 rounded-md border border-neutral-300 focus:ring-primary focus:border-primary"
                                />
                            </div>
                            <div className="relative">
                                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                                <input
                                    type="text"
                                    placeholder="Location"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3 rounded-md border border-neutral-300 focus:ring-primary focus:border-primary"
                                />
                            </div>
                            <div className="relative">
                               <select
                                    value={jobType}
                                    onChange={(e) => setJobType(e.target.value)}
                                    className="w-full appearance-none bg-white pl-4 pr-10 py-3 rounded-md border border-neutral-300 focus:ring-primary focus:border-primary"
                                >
                                    {jobTypes.map(type => <option key={type} value={type}>{type}</option>)}
                                </select>
                                <Briefcase className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 pointer-events-none" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Job Listings */}
                <div className="space-y-6">
                    {filteredJobs.length > 0 ? (
                        filteredJobs.map(job => <JobCard key={job.id} job={job} />)
                    ) : (
                         <div className="text-center py-20 bg-white rounded-lg shadow-sm">
                            <h3 className="text-2xl font-semibold text-neutral-700">No jobs found</h3>
                            <p className="mt-2 text-neutral-500">We couldn't find any jobs matching your search.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default JobsPage;