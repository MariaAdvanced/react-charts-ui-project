import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ArcadeMode = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-800 via-indigo-700 to-blue-800 text-white px-6"
    >
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-extrabold mb-4 tracking-tight animate-pulse">
          🚀 Arcade Mode Activated
        </h1>
        <p className="text-xl text-gray-200 mb-8">
          Speed. Precision. Glory. In this mode, every move counts.
        </p>

        <div className="bg-black bg-opacity-30 rounded-xl p-6 border border-indigo-400 shadow-xl">
          <p className="text-lg text-indigo-200 mb-2">
            🎯 Objectives:
          </p>
          <ul className="list-disc list-inside text-gray-100 text-left text-sm">
            <li>Complete rounds under pressure</li>
            <li>Earn XP and unlock achievements</li>
            <li>Climb the leaderboard</li>
          </ul>
        </div>

        <button
          onClick={() => navigate('/modes')}
          className="mt-10 px-6 py-3 bg-white text-indigo-700 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
        >
          ← Back to Game Modes
        </button>
      </div>
    </motion.div>
  );
};

export default ArcadeMode;
