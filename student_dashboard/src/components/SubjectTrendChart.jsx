// components/charts/SubjectTrendChart.js
import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const SubjectTrendChart = ({ data }) => {
  const chartData = data.map((row) => ({ Exam: row.Exam, Marks: parseInt(row.Marks) }));

  return (
    <LineChart width={600} height={300} data={chartData}>
      <XAxis dataKey="Exam" />
      <YAxis />
      <Tooltip />
      <CartesianGrid stroke="#ccc" />
      <Line type="monotone" dataKey="Marks" stroke="#8884d8" />
    </LineChart>
  );
};

export default SubjectTrendChart;