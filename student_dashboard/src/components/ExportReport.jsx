// components/ExportReport.js
import React from 'react';
import { utils, writeFile } from 'xlsx';

const ExportReport = ({ data }) => {
  const handleExport = () => {
    const ws = utils.json_to_sheet(data);
    const wb = utils.book_new();
    utils.book_append_sheet(wb, ws, 'Report');
    writeFile(wb, 'student-performance-report.xlsx');
  };

  return <button onClick={handleExport}>Export Report</button>;
};

export default ExportReport;