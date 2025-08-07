import React, { useState } from 'react';
import UploadMarks from './UploadMarks';
import MarksTable from './MarksTable';
import SubjectTrendChart from './SubjectTrendChart';
import TopPerformers from './TopPerformers';
import Underperformers from './UnderPerformers';
import ExportReport from './ExportReport';
import FilterPanel from './FilterPanel';

const Dashboard = () => {
  const [marksData, setMarksData] = useState([]);
  const [filters, setFilters] = useState({});

  const filteredData = marksData.filter((row) => {
    return (
      (!filters.subject || row.Subject === filters.subject) &&
      (!filters.semester || row.Semester === filters.semester) &&
      (!filters.batch || row.Batch === filters.batch)
    );
  });

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-purple-800 mb-6">Student Performance Dashboard</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <UploadMarks onDataParsed={setMarksData} />
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-md">
          <FilterPanel setFilters={setFilters} />
        </div>
      </div>

      {filteredData.length > 0 && (
        <>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <MarksTable data={filteredData} />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <SubjectTrendChart data={filteredData} />
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <TopPerformers data={filteredData} />
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <Underperformers data={filteredData} />
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <ExportReport data={filteredData} />
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;