import React, { useState, FormEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Logo } from '../constants';
import { Github, Chrome } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';
import { useAuth } from '../contexts/AuthContext';
import type { UserRole } from '../types';

const LoginPage: React.FC = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [role, setRole] = useState<UserRole>('Student');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [message, setMessage] = useState<string | null>(null);
    
    const navigate = useNavigate();
    const { user } = useAuth();

    useEffect(() => {
        // Redirect if user is already logged in.
        // This effect now handles all post-login navigation.
        if (user) {
            navigate('/dashboard', { replace: true });
        }
    }, [user, navigate]);

    const handleAuthAction = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setMessage(null);

        if (isLogin) {
            const { error } = await supabase.auth.signInWithPassword({ email, password });
            if (error) setError(error.message);
            // Navigation is handled by the useEffect hook above once the user state is updated.
        } else {
            const { error } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: {
                        full_name: fullName,
                        role: role,
                    }
                }
            });
            if (error) {
                setError(error.message);
            } else {
                setMessage('Signup successful! Please check your email to verify your account.');
                setIsLogin(true); // Switch to login tab
            }
        }
        setLoading(false);
    };

    const handleOAuth = async (provider: 'google' | 'github') => {
        setLoading(true);
        const { error } = await supabase.auth.signInWithOAuth({ provider });
        if (error) {
            setError(error.message);
            setLoading(false);
        }
    };

    const commonInputClasses = "w-full px-4 py-3 rounded-md bg-neutral-100 border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50";
    
    return (
        <div className="min-h-screen flex items-center justify-center bg-neutral-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-2xl shadow-2xl">
                <div>
                    <Logo className="mx-auto h-12 w-auto text-primary" />
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-neutral-900">
                        {isLogin ? 'Sign in to your account' : 'Create a new account'}
                    </h2>
                </div>
                
                <div className="flex border-b border-neutral-200">
                    <button onClick={() => { setIsLogin(true); setError(null); setMessage(null); }} className={`w-1/2 py-3 font-semibold text-center transition-colors ${isLogin ? 'border-b-2 border-primary text-primary' : 'text-neutral-500 hover:text-primary'}`}>
                        Log In
                    </button>
                    <button onClick={() => { setIsLogin(false); setError(null); setMessage(null); }} className={`w-1/2 py-3 font-semibold text-center transition-colors ${!isLogin ? 'border-b-2 border-primary text-primary' : 'text-neutral-500 hover:text-primary'}`}>
                        Sign Up
                    </button>
                </div>

                <form className="space-y-5" onSubmit={handleAuthAction}>
                    {message && <p className="text-center text-green-600 bg-green-100 p-3 rounded-md">{message}</p>}
                    {error && <p className="text-center text-red-600 bg-red-100 p-3 rounded-md">{error}</p>}
                    
                    {!isLogin && (
                        <div>
                            <label className="block text-sm font-medium text-neutral-700 mb-1">Full Name</label>
                            <input type="text" value={fullName} onChange={e => setFullName(e.target.value)} required className={commonInputClasses} disabled={loading} />
                        </div>
                    )}
                    <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1">Email Address</label>
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} required className={commonInputClasses} disabled={loading} />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1">Password</label>
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} required className={commonInputClasses} disabled={loading} />
                        {isLogin && <a href="#" className="text-sm text-primary hover:underline mt-1 block text-right">Forgot password?</a>}
                    </div>
                    {!isLogin && (
                        <div>
                            <label className="block text-sm font-medium text-neutral-700 mb-1">I am a...</label>
                            <select value={role} onChange={e => setRole(e.target.value as UserRole)} className={commonInputClasses} disabled={loading}>
                                <option value="Student">Student</option>
                                <option value="Intern">Intern</option>
                                <option value="Career Seeker">Career Seeker</option>
                                <option value="Partner Company">Partner Company</option>
                            </select>
                        </div>
                    )}
                    <button type="submit" className="w-full py-3 text-white bg-primary rounded-md font-semibold hover:bg-primary-dark transition-colors shadow-md disabled:bg-primary/70 flex justify-center items-center" disabled={loading}>
                        {loading ? <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div> : (isLogin ? 'Log In' : 'Create Account')}
                    </button>
                </form>
                
                <div className="relative">
                    <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-neutral-300" /></div>
                    <div className="relative flex justify-center text-sm"><span className="px-2 bg-white text-neutral-500">Or continue with</span></div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <button onClick={() => handleOAuth('google')} className="flex items-center justify-center gap-3 w-full py-3 border border-neutral-300 rounded-md hover:bg-neutral-50 transition-colors disabled:opacity-50" disabled={loading}>
                        <Chrome size={20} />
                        <span className="font-medium">Google</span>
                    </button>
                    <button onClick={() => handleOAuth('github')} className="flex items-center justify-center gap-3 w-full py-3 border border-neutral-300 rounded-md hover:bg-neutral-50 transition-colors disabled:opacity-50" disabled={loading}>
                        <Github size={20} />
                        <span className="font-medium">GitHub</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;