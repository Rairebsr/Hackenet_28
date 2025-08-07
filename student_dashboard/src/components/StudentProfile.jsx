// components/StudentProfile.js
import React from 'react';

const StudentProfile = ({ student }) => {
  return (
    <div>
      <h2>{student.Name}</h2>
      <p>Roll No: {student.RollNo}</p>
      <p>Batch: {student.Batch}</p>
      <p>Semester: {student.Semester}</p>
    </div>
  );
};

export default StudentProfile;