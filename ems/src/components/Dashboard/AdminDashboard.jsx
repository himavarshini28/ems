import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTasks from '../others/AllTasks'

const AdminDashboard = () => {
  return (
    <div className="bg-black h-screen w-full p-7">
         <Header/>
         <CreateTask/>
         <AllTasks/>
    </div>
   
  )
}

export default AdminDashboard
