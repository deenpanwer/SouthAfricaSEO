"use client";

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Test6Page() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/test6/results?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Coresignal Profile Search (Test 6)</h1>
      <form onSubmit={handleSearch} style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter job title or keywords"
          style={{ padding: '10px', fontSize: '16px', flexGrow: 1 }}
        />
        <button type="submit" style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
          Search
        </button>
      </form>
    </div>
  );
}
