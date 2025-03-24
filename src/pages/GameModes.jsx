import React from 'react';
import { Link } from 'react-router-dom';
import { BoltIcon, UsersIcon, ChartBarIcon, TrophyIcon } from '@heroicons/react/24/outline';

const gameModes = [
  { name: 'Arcade Mode', description: 'Experience the fastest and most fun gameplay!', icon: BoltIcon, link: '/arcade' },
  { name: 'Statistics Mode', description: 'View detailed stats and game performance.', icon: ChartBarIcon, link: '/stats' },
  { name: 'Multiplayer Mode', description: 'Play with others online in exciting team modes.', icon: UsersIcon, link: '/multiplayer' },
  { name: 'Training Mode', description: 'Train and practice to improve your skills.', icon: TrophyIcon, link: '/training' },
];

const GameModes = () => {
  return (
    <div className="p-6 min-h-screen bg-gray-100 dark:bg-gray-900">
      <h1 className="text-3xl font-semibold text-center text-gray-800 dark:text-white mb-8">Choose Your Game Mode</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {gameModes.map((mode) => (
          <Link
            key={mode.name}
            to={mode.link}
            className="bg-white p-6 rounded-lg shadow-lg hover:bg-indigo-600 hover:text-white transition duration-300 ease-in-out"
          >
            <div className="flex items-center justify-center mb-4">
              <mode.icon className="w-12 h-12 text-indigo-500" />
            </div>
            <h3 className="text-xl font-bold text-center">{mode.name}</h3>
            <p className="text-center text-gray-600 dark:text-gray-300 mt-2">{mode.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GameModes;
