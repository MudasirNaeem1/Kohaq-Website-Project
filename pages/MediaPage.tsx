
import React, { useState } from 'react';
import { MOCK_MEDIA } from '../constants';
import type { MediaItem } from '../types';
import { PlayCircle, Image } from 'lucide-react';

const MediaPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'all' | 'image' | 'video'>('all');

    const filteredMedia = MOCK_MEDIA.filter(item => {
        if (activeTab === 'all') return true;
        return item.type === activeTab;
    });

    const MediaCard: React.FC<{ item: MediaItem }> = ({ item }) => (
        <div className="group relative rounded-lg overflow-hidden shadow-lg cursor-pointer">
            <img src={item.thumbnailUrl} alt={item.title} className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <div className="absolute top-4 right-4 p-2 bg-black/50 rounded-full">
                    {item.type === 'video' ? <PlayCircle size={24} /> : <Image size={24} />}
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
            </div>
        </div>
    );

    return (
        <div>
            {/* Header */}
            <div className="bg-white text-center py-16">
                <h1 className="text-4xl font-extrabold text-neutral-900">Media Gallery</h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-neutral-600">
                    Explore moments from our community, events, and success stories.
                </p>
            </div>

            {/* Tabs and Gallery */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex justify-center mb-10 border-b border-neutral-200">
                    <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                        <button onClick={() => setActiveTab('all')} className={`${activeTab === 'all' ? 'border-primary text-primary' : 'border-transparent text-neutral-500 hover:text-neutral-700 hover:border-neutral-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}>
                            All
                        </button>
                         <button onClick={() => setActiveTab('image')} className={`${activeTab === 'image' ? 'border-primary text-primary' : 'border-transparent text-neutral-500 hover:text-neutral-700 hover:border-neutral-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}>
                            Images
                        </button>
                         <button onClick={() => setActiveTab('video')} className={`${activeTab === 'video' ? 'border-primary text-primary' : 'border-transparent text-neutral-500 hover:text-neutral-700 hover:border-neutral-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}>
                            Videos
                        </button>
                    </nav>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredMedia.map(item => (
                        <MediaCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MediaPage;