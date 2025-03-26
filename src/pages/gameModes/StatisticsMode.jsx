import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const StatisticsMode = () => {
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
        <h1 className="text-5xl font-extrabold text-indigo-400 drop-shadow-md">📊 Statistics Mode</h1>
        <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
          Dive into deep analytics. Discover patterns. Understand your performance. This is where improvement begins.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {[
          {
            title: '📈 Win/Loss Trends',
            desc: 'Visualize your match history over time.'
          },
          {
            title: '🎯 Accuracy Metrics',
            desc: 'Track shot precision and improvement.'
          },
          {
            title: '🧠 Strategy Breakdown',
            desc: 'Analyze heatmaps, movement, and decisions.'
          }
        ].map((stat, i) => (
          <div key={i} className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-indigo-300 mb-2">{stat.title}</h3>
            <p className="text-gray-400">{stat.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center text-gray-500 italic text-sm">
        “You can't improve what you don't measure.”
      </div>
    </motion.div>
  );
};

export default StatisticsMode;
