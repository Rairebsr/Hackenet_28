// components/FilterPanel.js
import React from 'react';

const FilterPanel = ({ setFilters }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <select name="subject" onChange={handleChange}>
        <option value="">All Subjects</option>
        <option value="Maths">Maths</option>
        <option value="Physics">Physics</option>
      </select>
      <select name="semester" onChange={handleChange}>
        <option value="">All Semesters</option>
        <option value="1">Semester 1</option>
        <option value="2">Semester 2</option>
      </select>
      <select name="batch" onChange={handleChange}>
        <option value="">All Batches</option>
        <option value="A">Batch A</option>
        <option value="B">Batch B</option>
      </select>
    </div>
  );
};

export default FilterPanel;