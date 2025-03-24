import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';

// Ψεύτικα δεδομένα για 31 μέρες
const fullData = Array.from({ length: 31 }, (_, i) => {
  const matches = Math.floor(Math.random() * 40) + 10;
  const wins = Math.floor(matches * (0.3 + Math.random() * 0.5));
  const winRate = Math.round((wins / matches) * 100);
  return { winRate };
});

// Helper: Φτιάχνει buckets
const groupByWinRate = (data) => {
  const buckets = {
    '0–25%': 0,
    '26–50%': 0,
    '51–75%': 0,
    '76–100%': 0
  };

  data.forEach(({ winRate }) => {
    if (winRate <= 25) buckets['0–25%']++;
    else if (winRate <= 50) buckets['26–50%']++;
    else if (winRate <= 75) buckets['51–75%']++;
    else buckets['76–100%']++;
  });

  return Object.entries(buckets).map(([range, count]) => ({
    range,
    count
  }));
};

const WinRateBucketsChart = () => {
  const bucketedData = groupByWinRate(fullData);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={bucketedData}
        layout="vertical"
        margin={{ top: 20, right: 30, left: 50, bottom: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis type="category" dataKey="range" />
        <Tooltip labelFormatter={(label) => `Win Rate: ${label}`} />
        <Legend />
        <Bar dataKey="count" fill="#4F46E5" name="Days in Range" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default WinRateBucketsChart;
