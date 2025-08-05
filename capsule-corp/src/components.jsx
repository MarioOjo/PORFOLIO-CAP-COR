import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-saiyan-blue text-white font-saiyan flex flex-col items-center justify-center px-4 text-center">
      <img
        src="/logo192.png"
        alt="Capsule Corp Logo"
        className="w-32 h-32 mb-6 animate-spin-slow"
      />
      <h1 className="text-5xl font-bold uppercase tracking-widest mb-2">Capsule Corp.</h1>
      <p className="text-capsule-yellow text-xl max-w-md mb-6">
        Your gateway to Z-level tech and gear.
      </p>
      <button
        onClick={() => navigate('/store')}
        className="px-6 py-3 bg-saiyan-orange text-black font-bold rounded-lg shadow-lg hover:bg-orange-500 transition"
      >
        Enter Store
      </button>
    </div>
  );
};

export default LandingPage;
