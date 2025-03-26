import Dashboard from '../pages/Dashboard';
import PlayerStats from '../pages/PlayerStats';
import MatchHistory from '../pages/MatchHistory';
import GameModes from '../pages/GameModes';
import LiveStats from '../pages/LiveStats';


import ArcadeMode from '../pages/gameModes/ArcadeMode';
import StatisticsMode from '../pages/gameModes/StatisticsMode';
import MultiplayerMode from '../pages/gameModes/MultiplayerMode';
import TrainingMode from '../pages/gameModes/TrainingMode';


import { motion } from 'framer-motion';

const withMotion = (Component) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -40 }}
    transition={{ duration: 0.5 }}
  >
    <Component />
  </motion.div>
);

export const routesConfig = [
  { path: '', element: <Dashboard /> },
  { path: 'players', element: <PlayerStats /> },
  { path: 'history', element: <MatchHistory /> },
  { path: 'modes', element: <GameModes /> },
  { path: 'live', element: <LiveStats /> },

  
  { path: 'modes/arcade', element: withMotion(ArcadeMode) },
  { path: 'modes/statistics', element: withMotion(StatisticsMode) },
  { path: 'modes/multiplayer', element: withMotion(MultiplayerMode) },
  { path: 'modes/training', element: withMotion(TrainingMode) },
];
