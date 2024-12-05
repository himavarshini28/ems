import React from 'react'

const CreateTask = () => {
  return (
    <div>
      <div className='p-5 bg-transparent mt-7 rounded'>
            <form className="flex flex-wrap w-full bg-red-200 items-start justify-between bg-transparent">
                <div className="w-1/2">
                <div >
                <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                <input className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text" placeholder='Make a UI design'/></div>
                

                    <div >
                <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                <input className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"type="date"/>
                </div>
               <div>
               <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
               <input className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text" palceholder="employee name"/>
               </div>
                <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>   
                <input className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text" placeholder="design, dev, etc"/>
                </div>
                </div>
                <div  className=" bg-transparent w-1/2">
                <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                <textarea className="text-sm py-1 px-2 w-full h-full rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" name="" cols="40" row="20">
                </textarea>
                </div>
               <button className="bg-slate-700 text-white py-2 px-6 rounded-md hover:bg-slate-800 transition-all self-end">Create Task</button>
               </div>
            </form>
         </div>
    </div>
  )
}

export default CreateTask
