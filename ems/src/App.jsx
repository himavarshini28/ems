import React from 'react'
import Login from "./components/Auth/Login.jsx"
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard.jsx"
import AdminDashboard from "./components/Dashboard/AdminDashboard.jsx"
function App() {
  return (
    <div className="text-white">
    {/* <Login/> */}
    {/* <EmployeeDashboard/> */}
    <AdminDashboard/>
    </div>
  )
}

export default App
