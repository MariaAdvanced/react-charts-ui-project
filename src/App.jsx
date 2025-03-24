import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Users from './pages/Users.jsx';

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 bg-gray-100 p-6 min-h-screen">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/players" element={<Users />} />
            <Route path="/history" element={<div>Match History</div>} />
            <Route path="/modes" element={<div>Game Modes</div>} />
            <Route path="/reports" element={<div>Reports</div>} />
            <Route path="/live" element={<div>Live Stats</div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
