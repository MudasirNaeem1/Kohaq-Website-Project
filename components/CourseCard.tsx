
import React from 'react';
import type { Course } from '../types';
import Card from './common/Card';
import { Star, Users, Clock } from 'lucide-react';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <Card className="flex flex-col h-full">
      <div className="relative">
        <img src={course.imageUrl} alt={course.title} className="w-full h-48 object-cover" />
        <div className="absolute top-3 left-3 bg-secondary text-white text-xs font-bold px-2 py-1 rounded-full">{course.level}</div>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <p className="text-sm text-primary font-semibold">{course.category}</p>
        <h3 className="mt-2 text-lg font-bold text-neutral-900 flex-grow">{course.title}</h3>
        <p className="mt-1 text-sm text-neutral-500">by {course.instructor}</p>
        <div className="mt-4 flex items-center justify-between text-sm text-neutral-600">
            <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-accent" fill="currentColor" />
                <span>{course.rating}</span>
            </div>
            <div className="flex items-center space-x-1">
                <Users className="w-4 h-4" />
                <span>{course.enrolled.toLocaleString()}</span>
            </div>
             <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{course.duration}</span>
            </div>
        </div>
      </div>
       <div className="p-5 border-t border-neutral-200 mt-auto flex items-center justify-between">
          <p className="text-xl font-extrabold text-primary">
            {typeof course.price === 'number' ? `$${course.price}` : course.price}
          </p>
          <button className="px-4 py-2 text-sm font-semibold text-white bg-primary rounded-full hover:bg-primary-dark transition-colors">
            Enroll Now
          </button>
      </div>
    </Card>
  );
};

export default CourseCard;