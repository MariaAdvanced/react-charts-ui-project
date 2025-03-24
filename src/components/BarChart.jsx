import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Jan', users: 30 },
  { name: 'Feb', users: 50 },
  { name: 'Mar', users: 80 },
];

const BarChartComponent = () => (
  <BarChart width={400} height={300} data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="users" fill="#8884d8" />
  </BarChart>
);

export default BarChartComponent;