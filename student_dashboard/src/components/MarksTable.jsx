// components/MarksTable.js
import React from 'react';

const MarksTable = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Roll No</th>
          <th>Subject</th>
          <th>Marks</th>
          <th>Exam</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr key={idx}>
            <td>{row.Name}</td>
            <td>{row.RollNo}</td>
            <td>{row.Subject}</td>
            <td>{row.Marks}</td>
            <td>{row.Exam}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MarksTable;
