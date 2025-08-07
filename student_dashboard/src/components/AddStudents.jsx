import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import axios from 'axios';

const AddStudents = () => {
  const [metadata, setMetadata] = useState({
    department: '',
    semester: '',
    division: '',
    examType: '',
  });

  const [student, setStudent] = useState({ name: '', rollNo: '' });
  const [marks, setMarks] = useState([{ subject: '', score: '' }]);
  const [excelFile, setExcelFile] = useState(null);

  // ========== Input Handlers ==========
  const handleMetaChange = (e) => {
    setMetadata({ ...metadata, [e.target.name]: e.target.value });
  };

  const handleStudentChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleMarkChange = (index, e) => {
    const updated = [...marks];
    updated[index][e.target.name] = e.target.value;
    setMarks(updated);
  };

  const addSubject = () => setMarks([...marks, { subject: '', score: '' }]);
  const removeSubject = (index) => {
    const updated = [...marks];
    updated.splice(index, 1);
    setMarks(updated);
  };

  // ========== API: Add Single Student ==========
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...metadata,
      student,
      marks,
    };

    try {
      const res = await axios.post('http://localhost:4000/api/results/add', payload);
      alert('Student result added successfully!');
      // Reset form
      setStudent({ name: '', rollNo: '' });
      setMarks([{ subject: '', score: '' }]);
    } catch (err) {
      console.error(err);
      alert('Error adding result.');
    }
  };

  // ========== Handle Excel Upload ==========
  const handleExcelChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.includes('sheet')) setExcelFile(file);
    else alert('Please upload a valid Excel file');
  };

  const handleExcelSubmit = async () => {
    if (!excelFile) return alert('Please select an Excel file');
    const reader = new FileReader();

    reader.onload = async (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: 'binary' });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const parsed = XLSX.utils.sheet_to_json(sheet);

      const payload = parsed.map((row) => ({
        ...metadata,
        student: { name: row.Name, rollNo: row.RollNo },
        marks: Object.entries(row)
          .filter(([key]) => key !== 'Name' && key !== 'RollNo')
          .map(([subject, score]) => ({ subject, score })),
      }));

      try {
        const res = await axios.post('http://localhost:4000/api/results/add-bulk', payload);
        alert('Bulk student results added successfully!');
        setExcelFile(null);
      } catch (err) {
        console.error(err);
        alert('Error uploading Excel data');
      }
    };

    reader.readAsBinaryString(excelFile);
  };

  return (
    <div className="p-6 space-y-10">
      <h2 className="text-3xl font-bold text-purple-700">Student Result Entry</h2>

      {/* Metadata */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {['department', 'semester', 'division', 'examType'].map((field) => (
          <div key={field}>
            <label className="block text-sm font-semibold capitalize mb-1">{field}</label>
            <input
              name={field}
              value={metadata[field]}
              onChange={handleMetaChange}
              placeholder={`Enter ${field}`}
              required
              className="w-full p-2 border rounded"
            />
          </div>
        ))}
      </div>

      {/* ==== SINGLE STUDENT ENTRY ==== */}
      <div className="bg-white p-6 rounded shadow space-y-6">
        <h3 className="text-xl font-semibold text-purple-800">Add Single Student</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <input
              name="name"
              value={student.name}
              onChange={handleStudentChange}
              placeholder="Student Name"
              required
              className="p-2 border rounded"
            />
            <input
              name="rollNo"
              value={student.rollNo}
              onChange={handleStudentChange}
              placeholder="Roll Number"
              required
              className="p-2 border rounded"
            />
          </div>

          {marks.map((mark, i) => (
            <div key={i} className="flex gap-3 mb-2">
              <input
                name="subject"
                placeholder="Subject"
                value={mark.subject}
                onChange={(e) => handleMarkChange(i, e)}
                className="p-2 border rounded w-full"
                required
              />
              <input
                name="score"
                placeholder="Score"
                type="number"
                value={mark.score}
                onChange={(e) => handleMarkChange(i, e)}
                className="p-2 border rounded w-32"
                required
              />
              {marks.length > 1 && (
                <button type="button" onClick={() => removeSubject(i)} className="text-red-500">❌</button>
              )}
            </div>
          ))}
          <button type="button" onClick={addSubject} className="text-purple-600">+ Add Subject</button>
          <button
            type="submit"
            className="block bg-purple-600 text-white py-2 px-6 rounded hover:bg-purple-700 mt-4"
          >
            Add Student Result
          </button>
        </form>
      </div>

      {/* ==== BULK EXCEL ENTRY ==== */}
      <div className="bg-white p-6 rounded shadow space-y-4">
        <h3 className="text-xl font-semibold text-purple-800">Upload via Excel</h3>
        <input
          type="file"
          accept=".xlsx, .xls"
          onChange={handleExcelChange}
          className="block border p-2 rounded"
        />
        <button
          onClick={handleExcelSubmit}
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          Upload Excel
        </button>
      </div>
    </div>
  );
};

export default AddStudents;
