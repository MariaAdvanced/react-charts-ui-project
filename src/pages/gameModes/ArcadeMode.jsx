import React from 'react';
import { motion } from 'framer-motion';
import { ChartBarIcon} from '@heroicons/react/24/outline';
import { BoltIcon } from '@heroicons/react/24/outline';

const ArcadeMode = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6 }}
      className="p-8 text-gray-900 dark:text-white"
    >
      
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 rounded-lg shadow-lg text-center">
        <div className="flex flex-col items-center">
          <BoltIcon className="h-12 w-12 text-yellow-300 mb-2 animate-pulse" />
          <h1 className="text-4xl font-extrabold mb-2">Arcade Mode</h1>
          <p className="text-lg text-white/90 max-w-xl">
            Test your reflexes in a fast-paced, high-stakes environment. Only the quickest survive!
          </p>
          <button className="mt-4 px-5 py-2 bg-yellow-400 text-gray-900 font-semibold rounded shadow hover:scale-105 transition">
            Start Now
          </button>
        </div>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {["Sessions", "Avg Score", "Completion Rate"].map((label, idx) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + idx * 0.2 }}
            className="bg-white dark:bg-gray-800 p-4 rounded shadow flex items-center gap-4"
          >
            <ChartBarIcon className="h-8 w-8 text-indigo-500" />
            <div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{label}</div>
              <div className="text-xl font-bold">{[320, "12,400", "78%"][idx]}</div>
            </div>
          </motion.div>
        ))}
      </div>

      
      <div className="mt-12">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
          className="bg-white dark:bg-gray-800 rounded p-6 shadow"
        >
          <h2 className="text-2xl font-semibold mb-4">Score Distribution</h2>
          <div className="h-64 flex items-center justify-center text-gray-400">
            
            [Chart Placeholder]
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ArcadeMode;