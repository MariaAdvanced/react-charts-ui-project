import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ChartBarIcon,
  UserIcon,
  CalendarDaysIcon,
  TrophyIcon,
  SignalIcon
} from '@heroicons/react/24/outline';

const navItems = [
  { path: '/', label: 'Dashboard', icon: ChartBarIcon },
  { path: '/players', label: 'Player Stats', icon: UserIcon },
  { path: '/history', label: 'Match History', icon: CalendarDaysIcon },
  { path: '/modes', label: 'Game Modes', icon: TrophyIcon },
  { path: '/reports', label: 'Reports', icon: TrophyIcon },
  { path: '/live', label: 'Live Stats', icon: SignalIcon }
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="w-64 min-h-screen bg-gray-800 text-white p-4">
      <h1 className="text-2xl font-bold mb-6">🎮 Game Dashboard</h1>
      <nav className="flex flex-col gap-2">
        {navItems.map(({ path, label, icon: Icon }) => {
          const isActive = location.pathname === path;
          return (
            <Link
              key={path}
              to={path}
              className={`flex items-center gap-3 px-4 py-2 rounded transition ${
                isActive
                  ? 'bg-gray-900 font-semibold border-l-4 border-indigo-500'
                  : 'hover:bg-gray-700'
              }`}
            >
              <Icon className="w-5 h-5" />
              {label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
