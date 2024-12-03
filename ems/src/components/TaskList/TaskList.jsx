import React from 'react'

const TaskList = () => {
  return (
    <div id='taskList' className='flex overflow-x-auto flex-nowrap items-center justify-start gap-5 h-[55%] py-5 w-full  mt-10'>
      <div className='h-full w-[300px] p-5 shrink-0 bg-red-400 rounded-xl'>
        <div className='flex justify-between items-center'>
        <h3 className=" text-sm bg-red-600 px-3 py-1 rounded">high</h3>
        <h4 className='text-sm'>4 Dec 2024</h4>
       </div>
        <h2 className='mt-4 text-2xl font-semibold'>Make this project</h2>   
        <p className='text-sm, mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere tenetur eos, sapiente, ipsa doloremque, tempore recusandae perspiciatis enim laboriosam assumenda consequatur eum cum!</p> 
        </div>
    </div>
  )
}

export default TaskList
