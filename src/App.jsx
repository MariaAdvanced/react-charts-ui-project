import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

import Dashboard from './pages/Dashboard';
import PlayerStats from './pages/PlayerStats';
import MatchHistory from './pages/MatchHistory';
import GameModes from './pages/GameModes';
import Reports from './pages/Reports';
import LiveStats from './pages/LiveStats';

import ArcadeMode from './pages/gameModes/ArcadeMode';
import StatisticsMode from './pages/gameModes/StatisticsMode';
import MultiplayerMode from './pages/gameModes/MultiplayerMode';
import TrainingMode from './pages/gameModes/TrainingMode';

import { motion } from 'framer-motion';

const animatedPage = (Component) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -40 }}
    transition={{ duration: 0.5 }}
  >
    <Component />
  </motion.div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          
          <Route index element={<Dashboard />} />
          <Route path="players" element={<PlayerStats />} />
          <Route path="history" element={<MatchHistory />} />
          <Route path="modes" element={<GameModes />} />
          <Route path="reports" element={<Reports />} />
          <Route path="live" element={<LiveStats />} />

          
          <Route path="modes/arcade" element={animatedPage(ArcadeMode)} />
          <Route path="modes/statistics" element={animatedPage(StatisticsMode)} />
          <Route path="modes/multiplayer" element={animatedPage(MultiplayerMode)} />
          <Route path="modes/training" element={animatedPage(TrainingMode)} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
