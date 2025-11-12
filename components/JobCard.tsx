
import React from 'react';
import type { Job } from '../types';
import Card from './common/Card';
import { MapPin, Briefcase, Clock } from 'lucide-react';

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <Card className="p-6 flex flex-col sm:flex-row items-start gap-6">
      <div className="flex-shrink-0">
        <img src={job.companyLogoUrl} alt={`${job.company} logo`} className="w-16 h-16 rounded-lg object-cover" />
      </div>
      <div className="flex-grow">
        <p className="text-sm font-semibold text-primary">{job.company}</p>
        <h3 className="text-lg font-bold text-neutral-900 mt-1">{job.title}</h3>
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-neutral-500">
          <div className="flex items-center space-x-1.5">
            <MapPin size={16} />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <Briefcase size={16} />
            <span>{job.type}</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <Clock size={16} />
            <span>{job.postedDate}</span>
          </div>
        </div>
      </div>
      <div className="mt-4 sm:mt-0 sm:ml-auto flex-shrink-0">
        <button className="px-5 py-2 text-sm font-semibold text-white bg-primary rounded-full hover:bg-primary-dark transition-colors whitespace-nowrap">
          Apply Now
        </button>
      </div>
    </Card>
  );
};

export default JobCard;