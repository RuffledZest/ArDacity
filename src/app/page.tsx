'use client';

import * as React from 'react';
import { useState } from 'react';

import LandingPage from '@/components/LandingPage';
import Preloader from '@/components/Preloader';

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  const handlePreloaderComplete = () => {
    setLoading(false);
  };

  return (
    <main className="w-full min-h-screen overflow-x-hidden">
      {loading ? (
        <Preloader onComplete={handlePreloaderComplete} />
      ) : (
        <LandingPage />
      )}
    </main>
  );
}
