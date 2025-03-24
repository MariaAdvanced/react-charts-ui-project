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
   
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <DateRangePicker onDateChange={setDateRange} />

      <p className="text-sm text-gray-500 mb-4">
        Showing data from: {dateRange.start?.toDateString()} to {dateRange.end?.toDateString()}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 shadow rounded">
          <div className="text-lg font-semibold mb-2">Stacked Bar Chart</div>
          <StackedBarChart dateRange={dateRange} />
        </div>
        <div className="bg-white p-4 shadow rounded">
          <div className="text-lg font-semibold mb-2">Game Modes Usage</div>
          <PieChartWithLabels dateRange={dateRange} />
        </div>
        <div className="bg-white p-4 shadow rounded">
  <div className="text-lg font-semibold mb-2">Scatter & Best Fit</div>
  <ScatterWithBestFit dateRange={dateRange} />
</div>
<div className="bg-white p-4 shadow rounded">
  <div className="text-lg font-semibold mb-2">Win Rate Distribution</div>
  <WinRateBucketsChart />
</div>

<div className="bg-white p-4 shadow rounded col-span-2">
  <div className="text-lg font-semibold mb-2">Composed Chart</div>
  <ComposedGameChart dateRange={dateRange} />
</div>

      </div>
    </div>
   
  );
};

export default Dashboard;
