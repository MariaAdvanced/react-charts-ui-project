import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const data = [
  { name: 'Admin', value: 40 },
  { name: 'User', value: 30 },
  { name: 'Guest', value: 30 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const PieChartComponent = () => (
  <PieChart width={400} height={300}>
    <Pie
      data={data}
      cx="50%"
      cy="50%"
      outerRadius={80}
      fill="#8884d8"
      dataKey="value"
      label
    >
      {data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
    </Pie>
    <Tooltip />
  </PieChart>
);

export default PieChartComponent;