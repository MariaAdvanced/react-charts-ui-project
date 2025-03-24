import React from 'react';
import {
  PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const modes = ['Casual', 'Ranked', 'Hardcore', 'Custom'];

const fullData = Array.from({ length: 31 }, (_, i) => {
  const date = `2024-03-${(i + 1).toString().padStart(2, '0')}`;
  return modes.map(mode => ({
    date,
    mode,
    count: Math.floor(Math.random() * 100) + 20
  }));
}).flat();

const COLORS = ['#6366F1', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'];

const PieChartWithLabels = ({ dateRange }) => {
  let filteredData = [];

  if (dateRange?.start && dateRange?.end) {
    const start = dateRange.start.toISOString().slice(0, 10);
    const end = dateRange.end.toISOString().slice(0, 10);

    filteredData = fullData.filter(d => d.date >= start && d.date <= end);
  }

  const modeTotals = {};
  filteredData.forEach(d => {
    if (!modeTotals[d.mode]) modeTotals[d.mode] = 0;
    modeTotals[d.mode] += d.count;
  });

  const pieData = Object.entries(modeTotals).map(([mode, count]) => ({
    name: mode,
    value: count
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={pieData}
          cx="50%"
          cy="50%"
          outerRadius={100}
          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
          dataKey="value"
        >
          {pieData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartWithLabels;
