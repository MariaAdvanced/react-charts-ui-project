import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const fullData = [
  { date: '2024-03-01', wins: 10, losses: 20 },
  { date: '2024-03-02', wins: 13, losses: 18 },
  { date: '2024-03-03', wins: 16, losses: 16 },
  { date: '2024-03-04', wins: 19, losses: 14 },
  { date: '2024-03-05', wins: 22, losses: 20 },
  { date: '2024-03-06', wins: 10, losses: 18 },
  { date: '2024-03-07', wins: 13, losses: 16 },
  { date: '2024-03-08', wins: 16, losses: 14 },
  { date: '2024-03-09', wins: 19, losses: 12 },
  { date: '2024-03-10', wins: 22, losses: 20 },
  { date: '2024-03-11', wins: 10, losses: 18 },
  { date: '2024-03-12', wins: 13, losses: 16 },
  { date: '2024-03-13', wins: 16, losses: 14 },
  { date: '2024-03-14', wins: 19, losses: 12 },
  { date: '2024-03-15', wins: 22, losses: 20 },
  { date: '2024-03-16', wins: 10, losses: 18 },
  { date: '2024-03-17', wins: 13, losses: 16 },
  { date: '2024-03-18', wins: 16, losses: 14 },
  { date: '2024-03-19', wins: 19, losses: 12 },
  { date: '2024-03-20', wins: 22, losses: 20 },
  { date: '2024-03-21', wins: 10, losses: 18 },
  { date: '2024-03-22', wins: 13, losses: 16 },
  { date: '2024-03-23', wins: 16, losses: 14 },
  { date: '2024-03-24', wins: 19, losses: 12 },
  { date: '2024-03-25', wins: 22, losses: 20 },
  { date: '2024-03-26', wins: 10, losses: 18 },
  { date: '2024-03-27', wins: 13, losses: 16 },
  { date: '2024-03-28', wins: 16, losses: 14 },
  { date: '2024-03-29', wins: 19, losses: 12 },
  { date: '2024-03-30', wins: 22, losses: 20 },
  { date: '2024-03-31', wins: 25, losses: 22 }
];

const formatDate = (dateObj) => dateObj.toISOString().slice(0, 10);

const StackedBarChart = ({ dateRange }) => {
  const start = formatDate(dateRange?.start || new Date('2024-03-01'));
  const end = formatDate(dateRange?.end || new Date('2024-03-31'));

  const filteredData = fullData.filter(d => d.date >= start && d.date <= end);

  // DEBUG
  console.log('📅 Start:', start, '| End:', end);
  console.log('🎯 FilteredData:', filteredData);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={filteredData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="wins" stackId="a" fill="#4F46E5" />
        <Bar dataKey="losses" stackId="a" fill="#F87171" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default StackedBarChart;
