import React from 'react';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';


const fullData = Array.from({ length: 31 }, (_, i) => {
  const day = `2024-03-${(i + 1).toString().padStart(2, '0')}`;
  const matches = Math.floor(Math.random() * 40) + 10;
  const wins = Math.floor(matches * (0.4 + Math.random() * 0.3));
  const xp = wins * (50 + Math.floor(Math.random() * 20));
  const winRate = Math.round((wins / matches) * 100);
  return { date: day, matches, wins, xp, winRate };
});

const formatDate = (dateObj) => dateObj.toISOString().slice(0, 10);

const ComposedGameChart = ({ dateRange }) => {
  const start = formatDate(dateRange?.start || new Date('2024-03-01'));
  const end = formatDate(dateRange?.end || new Date('2024-03-31'));

  const filteredData = fullData.filter(d => d.date >= start && d.date <= end);

  return (
    <ResponsiveContainer width="100%" height={350}>
      <ComposedChart data={filteredData}>
        <CartesianGrid stroke="#f0f0f0" />
        <XAxis dataKey="date" />
        <YAxis yAxisId="left" />
        <YAxis yAxisId="right" orientation="right" />
        <Tooltip />
        <Legend />
        <Bar yAxisId="left" dataKey="matches" barSize={20} fill="#4F46E5" name="Matches Played" />
        <Line yAxisId="left" type="monotone" dataKey="winRate" stroke="#F59E0B" name="Win Rate (%)" />
        <Area yAxisId="right" type="monotone" dataKey="xp" fill="#10B98155" stroke="#10B981" name="XP Gained" />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default ComposedGameChart;
