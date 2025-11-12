
import React from 'react';
import { MOCK_POSTS } from '../constants';
import { MessageSquare, Eye, Search, Plus } from 'lucide-react';

const ConnectPage: React.FC = () => {
    return (
        <div className="bg-neutral-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                 {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-neutral-900">Kohaq Connect</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-neutral-600">
                        Join the conversation. Ask questions, share your knowledge, and connect with peers and mentors.
                    </p>
                </div>

                {/* Search and New Post */}
                <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8">
                    <div className="relative w-full md:w-auto md:flex-grow max-w-lg">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                        <input type="text" placeholder="Search discussions..." className="w-full pl-12 pr-4 py-3 rounded-full border border-neutral-300 focus:ring-primary focus:border-primary"/>
                    </div>
                    <button className="w-full md:w-auto flex items-center justify-center gap-2 px-6 py-3 font-semibold text-white bg-primary rounded-full hover:bg-primary-dark transition-colors shadow-md">
                        <Plus size={20} />
                        <span>Start a Discussion</span>
                    </button>
                </div>

                {/* Discussion List */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-neutral-200">
                    <ul>
                        {MOCK_POSTS.map((post, index) => (
                            <li key={post.id} className={`p-6 ${index < MOCK_POSTS.length - 1 ? 'border-b border-neutral-200' : ''} hover:bg-neutral-50 transition-colors`}>
                                <div className="flex items-start gap-4">
                                    <img src={post.authorAvatarUrl} alt={post.author} className="w-12 h-12 rounded-full"/>
                                    <div className="flex-grow">
                                        <h3 className="text-lg font-semibold text-neutral-800 hover:text-primary cursor-pointer">{post.title}</h3>
                                        <p className="text-sm text-neutral-500 mt-1">
                                            Posted by <span className="font-medium text-neutral-700">{post.author}</span> &bull; {post.timestamp}
                                        </p>
                                        <div className="mt-3 flex flex-wrap gap-2">
                                            {post.tags.map(tag => (
                                                <span key={tag} className="px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-full">#{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="hidden sm:flex flex-col items-end text-sm text-neutral-500 space-y-2">
                                        <div className="flex items-center gap-2">
                                            <span>{post.replies}</span>
                                            <MessageSquare size={16} />
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span>{post.views}</span>
                                            <Eye size={16} />
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default ConnectPage;