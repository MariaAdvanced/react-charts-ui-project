import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const modes = ['Arcade', 'Training', 'Multiplayer', 'Statistics'];
const modeIcons = {
  Arcade: '🎮',
  Training: '🧠',
  Multiplayer: '👥',
  Statistics: '📊',
};

const sampleUsers = ['Alex_Pro', 'NoobMaster69', 'GamerGirl', 'SniperWolf', 'EliteX', 'Rogue99', 'DarkKnight'];

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

const LiveStats = () => {
  const [playerCounts, setPlayerCounts] = useState({});
  const [feed, setFeed] = useState([]);

  
  useEffect(() => {
    const updateCounts = () => {
      const counts = {};
      modes.forEach((mode) => {
        counts[mode] = getRandomInt(100, 1000);
      });
      setPlayerCounts(counts);
    };
    updateCounts();
    const interval = setInterval(updateCounts, 5000);
    return () => clearInterval(interval);
  }, []);

 
  useEffect(() => {
    const interval = setInterval(() => {
      const user = sampleUsers[getRandomInt(0, sampleUsers.length)];
      const mode = modes[getRandomInt(0, modes.length)];
      const points = getRandomInt(10, 100);
      const newMessage = `${user} scored ${points} points in ${mode} mode`;

      setFeed((prev) => [...prev.slice(-9), newMessage]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen p-6 bg-gray-950 text-white">
      <h2 className="text-3xl font-bold text-center mb-8 text-indigo-400">⚡ Live Game Stats</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
        {modes.map((mode) => (
          <motion.div
            key={mode}
            className="bg-gray-900 rounded-xl p-4 shadow-[0_0_20px_#0ff] text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="text-4xl mb-2">{modeIcons[mode]}</div>
            <h3 className="text-xl font-semibold text-cyan-400">{mode}</h3>
            <p className="text-2xl font-bold text-lime-300">{playerCounts[mode] || 0} online</p>
          </motion.div>
        ))}
      </div>

      <div className="bg-gray-900 rounded-lg p-4 shadow-[0_0_20px_#f0f] max-w-3xl mx-auto">
        <h4 className="text-lg font-semibold mb-3 text-pink-400">🔥 Live Activity Feed</h4>
        <ul className="space-y-2 h-60 overflow-y-auto">
          {feed.map((msg, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="text-sm text-gray-300"
            >
              {msg}
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LiveStats;
