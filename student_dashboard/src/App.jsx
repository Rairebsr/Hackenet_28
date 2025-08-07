import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import AddStudents from './components/AddStudents'
import Sidebar from './components/Sidebar'

function App() {
  

  return (
    <div className="flex min-h-screen bg-purple-50">
      <Sidebar />
      <div className="ml-52 p-8 w-full">
        <Routes>
          <Route path="/" element={<AddStudents />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
