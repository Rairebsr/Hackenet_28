// components/UploadMarks.js
import React, { useState } from 'react';
import Papa from 'papaparse';

const UploadMarks = ({ onDataParsed }) => {
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    Papa.parse(file, {
      header: true,
      complete: (results) => onDataParsed(results.data),
    });
  };

  return <input type="file" accept=".csv" onChange={handleFileUpload} />;
};

export default UploadMarks;