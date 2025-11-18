"use client";

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { FullProfile } from '../../types/profile';
import { ProfileCard } from '../components/ProfileCard';

export default function Test6ResultsPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q');
  const [profiles, setProfiles] = useState<FullProfile[]>([]);
  const [rawCoresignalData, setRawCoresignalData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showRawData, setShowRawData] = useState(false); // State to toggle raw data visibility

  useEffect(() => {
    if (query) {
      const fetchProfiles = async () => {
        try {
          setLoading(true);
          setError(null);
          const response = await fetch(`/test6/api/search-coresignal?q=${encodeURIComponent(query)}`);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const { profiles: fetchedProfiles, rawCoresignalData: fetchedRawData } = await response.json();
          setProfiles(fetchedProfiles);
          setRawCoresignalData(fetchedRawData);
        } catch (e: any) {
          setError(e.message || 'Failed to fetch profiles');
        } finally {
          setLoading(false);
        }
      };
      fetchProfiles();
    } else {
      setLoading(false);
    }
  }, [query]);

  if (loading) {
    return <div className="max-w-3xl mx-auto p-5 font-sans text-gray-800 bg-gray-50">Loading profiles...</div>;
  }

  if (error) {
    return <div className="max-w-3xl mx-auto p-5 font-sans text-gray-800 bg-gray-50" style={{ color: 'red' }}>Error: {error}</div>;
  }

  if (profiles.length === 0) {
    return <div className="max-w-3xl mx-auto p-5 font-sans text-gray-800 bg-gray-50">No profiles found for "{query}".</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-5 font-sans text-gray-800 bg-gray-50">
      <h1 className="text-2xl font-bold mb-5 text-black">Search Results for "{query}"</h1>
      <div className="mt-5">
        {profiles.filter(profile => profile.name || profile.headline).map((profile) => (
          <ProfileCard key={profile.id} profile={profile} />
        ))}
      </div>

      {rawCoresignalData && (
        <div className="mt-8 p-4 border border-gray-300 bg-gray-50">
          <button
            onClick={() => setShowRawData(!showRawData)}
            className="text-blue-700 hover:underline font-semibold mb-2"
          >
            {showRawData ? 'Hide Raw Coresignal Data' : 'Show Raw Coresignal Data'}
          </button>
          {showRawData && (
            <pre className="bg-white p-3 overflow-auto text-xs leading-relaxed">
              {JSON.stringify(rawCoresignalData, null, 2)}
            </pre>
          )}
        </div>
      )}
    </div>
  );
}