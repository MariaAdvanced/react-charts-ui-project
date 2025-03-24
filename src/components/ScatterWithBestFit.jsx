import React, { useMemo } from 'react';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const fullData = Array.from({ length: 31 }, (_, i) => {
  const date = `2024-03-${(i + 1).toString().padStart(2, '0')}`;
  const gamesPlayed = Math.floor(Math.random() * 50) + 10;
  const wins = Math.floor(gamesPlayed * (0.3 + Math.random() * 0.5));
  return { date, gamesPlayed, wins };
});

const formatDate = (dateObj) => dateObj.toISOString().slice(0, 10);

const calculateBestFitLine = (data) => {
  if (data.length === 0) return [];

  const n = data.length;
  const sumX = data.reduce((acc, d) => acc + d.gamesPlayed, 0);
  const sumY = data.reduce((acc, d) => acc + d.wins, 0);
  const sumXY = data.reduce((acc, d) => acc + d.gamesPlayed * d.wins, 0);
  const sumX2 = data.reduce((acc, d) => acc + d.gamesPlayed ** 2, 0);

  const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX ** 2);
  const intercept = (sumY - slope * sumX) / n;

  const minX = Math.min(...data.map((d) => d.gamesPlayed));
  const maxX = Math.max(...data.map((d) => d.gamesPlayed));

  return [
    { gamesPlayed: minX, wins: slope * minX + intercept },
    { gamesPlayed: maxX, wins: slope * maxX + intercept },
  ];
};

const ScatterWithBestFit = ({ dateRange }) => {
  const start = formatDate(dateRange?.start || new Date('2024-03-01'));
  const end = formatDate(dateRange?.end || new Date('2024-03-31'));

  const filteredData = fullData.filter((d) => d.date >= start && d.date <= end);
  const regressionLine = useMemo(() => calculateBestFitLine(filteredData), [filteredData]);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <ScatterChart>
        <CartesianGrid />
        <XAxis type="number" dataKey="gamesPlayed" name="Games Played" />
        <YAxis type="number" dataKey="wins" name="Wins" />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Legend />
        <Scatter name="Player Data" data={filteredData} fill="#4F46E5" />
        <Scatter
  name="Best Fit"
  data={regressionLine}
  fill="#F59E0B"
  line={{ stroke: "#F59E0B", strokeWidth: 2 }}
  shape={() => null}
  legendType="line"
/>

      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default ScatterWithBestFit;
