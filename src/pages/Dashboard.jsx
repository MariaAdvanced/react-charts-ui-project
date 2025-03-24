import React from 'react';
import BarChartComponent from '../components/BarChart.jsx';
import PieChartComponent from '../components/PieChart.jsx';

const Dashboard = () => (
  <div className="min-h-screen bg-gray-100 p-8">
    <h2 className="text-2xl font-bold text-center mb-8">Dashboard</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white shadow-md rounded-lg p-4">
        <BarChartComponent />
      </div>
      <div className="bg-white shadow-md rounded-lg p-4">
        <PieChartComponent />
      </div>
    </div>
  </div>
);

export default Dashboard;