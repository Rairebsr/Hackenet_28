// components/Underperformers.js
import React from 'react';

const Underperformers = ({ data }) => {
  const under = data.filter((d) => d.Marks < 40);

  return (
    <div>
      <h3>Underperformers</h3>
      <ul>
        {under.map((student, index) => (
          <li key={index}>{student.Name} - {student.Marks}</li>
        ))}
      </ul>
    </div>
  );
};

export default Underperformers;