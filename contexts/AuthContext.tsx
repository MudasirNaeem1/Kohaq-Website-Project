import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { supabase } from '../lib/supabaseClient';
import { Session, User } from '@supabase/supabase-js';
import type { AuthContextType, Profile } from '../types';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // onAuthStateChange fires with the session immediately on page load,
    // so we don't need a separate getSession() call. This simplifies the logic.
    const { data: authListener } = supabase.auth.onAuthStateChange(async (_event, session) => {
      setSession(session);
      const currentUser = session?.user ?? null;
      setUser(currentUser);

      if (currentUser) {
        await fetchProfile(currentUser);
      } else {
        setProfile(null);
      }
      
      // The initial auth check is complete.
      setLoading(false);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const fetchProfile = async (user: User) => {
    try {
      const { data, error, status } = await supabase
        .from('profiles')
        .select(`id, full_name, role, avatar_url`)
        .eq('id', user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setProfile(data as Profile);
      } else {
        setProfile(null); // Ensure profile is null if no data is returned
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
      setProfile(null); // Clear profile on error
    }
  };


  const signOut = async () => {
    await supabase.auth.signOut();
    // State updates are handled by the onAuthStateChange listener
  };

  const value = {
    session,
    user,
    profile,
    signOut,
    loading,
  };
  
  // The provider should always render its children.
  // Consumer components are responsible for handling the loading state.
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};