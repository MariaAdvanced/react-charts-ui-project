import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const MultiplayerMode = () => {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-800 text-white p-6"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.5 }}
    >
         <div className="mb-6">
                        <Link
                          to="/modes"
                          className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition"
                        >
                          <ArrowLeftIcon className="w-5 h-5 mr-2" />
                          Back to Game Modes
                        </Link>
                      </div>
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-indigo-400 drop-shadow-md">🤝 Multiplayer Mode</h1>
        <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
          Play with friends. Dominate as a squad. Compete globally. Multiplayer Mode is where legends are forged.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {[
          {
            title: '🧑‍🤝‍🧑 Team-Based Matches',
            desc: 'Coordinate tactics and win together.'
          },
          {
            title: '🌐 Global Leaderboards',
            desc: 'Climb the ranks with your squad.'
          },
          {
            title: '🎙️ Voice & Text Chat',
            desc: 'Communicate in real-time during matches.'
          }
        ].map((feature, i) => (
          <div key={i} className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-indigo-300 mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center text-gray-500 italic text-sm">
        “Alone you’re strong. Together, unstoppable.”
      </div>
    </motion.div>
  );
};

export default MultiplayerMode;
