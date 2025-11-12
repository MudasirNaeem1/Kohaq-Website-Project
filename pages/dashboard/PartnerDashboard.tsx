import React from 'react';
import { useAuth } from '../../contexts/AuthContext';

const PartnerDashboard: React.FC = () => {
    const { profile } = useAuth();

    return (
        <div className="bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-4xl font-extrabold text-neutral-900">Welcome, {profile?.full_name}!</h1>
                <p className="mt-4 text-lg text-neutral-600">This is your Partner Company Dashboard.</p>
                <div className="mt-8 p-8 border-dashed border-2 border-neutral-300 rounded-lg text-center">
                    <h2 className="text-xl font-semibold text-neutral-700">Content Coming Soon</h2>
                    <p className="text-neutral-500 mt-2">Widgets for managing job postings, reviewing candidates, and viewing analytics will appear here.</p>
                </div>
            </div>
        </div>
    );
};

export default PartnerDashboard;