import React, { useState } from 'react';
import DateRangePicker from '../components/DateRangePicker.jsx';
import StackedBarChart from '../components/StackedBarChart.jsx';
import PieChartWithLabels from '../components/PieChartWithLabels.jsx';
import ScatterWithBestFit from '../components/ScatterWithBestFit.jsx';
import ComposedGameChart from '../components/ComposedGameChart.jsx';
import WinRateBucketsChart from '../components/WinRateBucketsChart.jsx';

const Dashboard = () => {
  const [dateRange, setDateRange] = useState({
    start: new Date('2024-03-01'),
    end: new Date('2024-03-31')
  });

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">📊 Game Insights Dashboard</h2>

      <DateRangePicker onDateChange={setDateRange} />

      <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
        Showing data from: <strong>{dateRange.start?.toDateString()}</strong> to <strong>{dateRange.end?.toDateString()}</strong>
      </p>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
          <h3 className="text-sm text-gray-500 dark:text-gray-400">Total Matches</h3>
          <p className="text-xl font-bold text-indigo-500">92</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
          <h3 className="text-sm text-gray-500 dark:text-gray-400">Top Game Mode</h3>
          <p className="text-xl font-bold text-indigo-500">Multiplayer</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
          <h3 className="text-sm text-gray-500 dark:text-gray-400">Avg XP Gained</h3>
          <p className="text-xl font-bold text-indigo-500">835</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
          <h3 className="text-sm text-gray-500 dark:text-gray-400">Avg Win Rate</h3>
          <p className="text-xl font-bold text-indigo-500">58%</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 p-4 shadow rounded">
          <div className="text-lg font-semibold mb-2 text-gray-700 dark:text-indigo-300">📈 Daily Match Outcomes</div>
          <StackedBarChart dateRange={dateRange} />
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 shadow rounded">
          <div className="text-lg font-semibold mb-2 text-gray-700 dark:text-indigo-300">🎮 Game Mode Popularity</div>
          <PieChartWithLabels dateRange={dateRange} />
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 shadow rounded">
          <div className="text-lg font-semibold mb-2 text-gray-700 dark:text-indigo-300">📊 Player Skill Progression</div>
          <ScatterWithBestFit dateRange={dateRange} />
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 shadow rounded">
          <div className="text-lg font-semibold mb-2 text-gray-700 dark:text-indigo-300">🏅 Win Rate Distribution</div>
          <WinRateBucketsChart />
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 shadow rounded col-span-2">
          <div className="text-lg font-semibold mb-2 text-gray-700 dark:text-indigo-300">📊 Match Volume, XP & Win Rate Over Time</div>
          <ComposedGameChart dateRange={dateRange} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
