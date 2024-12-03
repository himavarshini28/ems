import React from 'react'

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <h1 className='text-2xl font-medium'>Hello <br/> <span className='text-3xl font-semibold'>Hima👋</span></h1>
      <button className='bg-red-600 text-lg font-medium px-2 py-2 rounded-md'>Log Out</button>
    </div>
  )
}

export default Header
