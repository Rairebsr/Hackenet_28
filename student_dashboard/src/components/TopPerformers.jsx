// components/TopPerformers.js
import React from 'react';

const TopPerformers = ({ data }) => {
  const top = [...data]
    .sort((a, b) => b.Marks - a.Marks)
    .slice(0, 5);

  return (
    <div>
      <h3>Top Performers</h3>
      <ul>
        {top.map((student, index) => (
          <li key={index}>{student.Name} - {student.Marks}</li>
        ))}
      </ul>
    </div>
  );
};

export default TopPerformers;