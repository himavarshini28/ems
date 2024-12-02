import React, { useState } from 'react'

const Login = () => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const submitHandler= (e)=>
  {
      e.preventDefault();
      console.log("email is",email)
      console.log("password is",password)
      setEmail('')
      setPassword('')
  }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 border-emerald-600 p-20 py-20 rounded-lg'>
        <form onSubmit={(e)=>{submitHandler(e)}} className="flex flex-col items-center justify-center">
          <input 
          required
          value={email} 
          onChange={(e)=>{setEmail(e.target.value)}}
          className='text-white outline-none border-2 border-emerald-600 py-3 px-5 text-xl bg-transparent placeholder:text-grey-400 rounded-full' 
          type="email" 
          placeholder='Enter your email'/>
          <input
          required
          value={password}
          onChange={(e)=>{setPassword(e.target.value)}}
          className='text-white outline-none border-2 border-emerald-600 py-3 px-5 text-xl bg-transparent placeholder:text-grey-400 rounded-full mt-3' 
          type="password"
          placeholder='Enter password'/>
          <button className='text-white mt-5 outline-none border-none bg-emerald-600 py-3 px-5 text-xl placeholder:text-white rounded-full mt-10' >Log in</button>
        </form>
      </div>
    </div>
  )
}

export default Login
