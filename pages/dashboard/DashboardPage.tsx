import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import StudentDashboard from './StudentDashboard';
import InternDashboard from './InternDashboard';
import PartnerDashboard from './PartnerDashboard';
import AdminDashboard from './AdminDashboard';
import CareerSeekerDashboard from './CareerSeekerDashboard';

const DashboardPage: React.FC = () => {
    const { profile, user, loading, signOut } = useAuth();

    if (loading) {
        return (
            <div className="flex justify-center items-center h-[calc(100vh-200px)]">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
            </div>
        );
    }
    
    // After loading, if a user exists but their profile does not, it means the profile fetch failed.
    // This is a critical state to handle gracefully.
    if (user && !profile) {
        return (
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center bg-white rounded-lg shadow-md">
                <h1 className="text-3xl font-bold text-red-600">Error Loading Profile</h1>
                <p className="mt-4 text-lg text-neutral-700">
                    We were unable to retrieve your profile details from the database.
                </p>
                <p className="mt-2 text-neutral-600 max-w-2xl mx-auto">
                    This can happen if your user profile wasn't created correctly after signing up, or due to a database permissions issue. Please ensure your Supabase <strong>`profiles`</strong> table has the correct Row Level Security (RLS) policies to allow authenticated users to read their own profile.
                </p>
                <button 
                    onClick={signOut} 
                    className="mt-8 px-6 py-3 text-white bg-primary font-semibold rounded-full hover:bg-primary-dark transition-colors shadow-lg transform hover:scale-105"
                >
                    Log Out and Try Again
                </button>
            </div>
        );
    }


    if (profile) {
        switch (profile.role) {
            case 'Student':
                return <StudentDashboard />;
            case 'Intern':
                return <InternDashboard />;
            case 'Partner Company':
                return <PartnerDashboard />;
            case 'Admin':
                return <AdminDashboard />;
            case 'Career Seeker':
                return <CareerSeekerDashboard />;
            default:
                return <div className="container mx-auto p-8">Invalid user role detected. Please contact support.</div>;
        }
    }

    // This is a fallback case, ProtectedRoute should prevent this.
    return <div className="container mx-auto p-8">An unexpected error occurred. Please log in again.</div>;
};

export default DashboardPage;