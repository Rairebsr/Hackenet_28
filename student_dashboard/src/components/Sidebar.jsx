import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  
  return (
    <div className="w-52 fixed h-full bg-purple-700 text-white shadow-lg">
      <h2 className="p-5 text-xl font-bold border-b border-purple-600">Teacher Panel</h2>
      <ul className="p-4 space-y-3">
        <li>
          <Link 
            to="/" 
            className={`block p-3 rounded-lg transition-all ${location.pathname === '/' ? 'bg-purple-800 font-medium' : 'hover:bg-purple-600'}`}
          >
            Add Students
          </Link>
        </li>
        <li>
          <Link 
            to="/dashboard" 
            className={`block p-3 rounded-lg transition-all ${location.pathname === '/dashboard' ? 'bg-purple-800 font-medium' : 'hover:bg-purple-600'}`}
          >
            Student Performance
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;