import React, { useState } from 'react'

const SignIn = () => {

  const[formData,setFormData] = useState({})

  const handleChange = (e)=>{
      setFormData({
        ...formData,  // let you copy the data of formdata
        [e.target.id]:e.target.value
      })
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()
    // const res = await fetch('/api/sign-in',formData)
    // we will create proxy so that it will request to correct address
  }


  return (
    <div style={{height:649}} className="bg-slate-700 flex items-center justify-center">
  <div className="bg-white shadow-blue-900 rounded-lg shadow-2xl sm:w-full md:w-1/3 p-6">
    <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800">Sign In</h2>
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-md font-bold text-gray-700">Username</label>
        <input onChange={handleChange} type="text" id="username" placeholder='Enter your username' name="username" className="border border-gray-300 rounded-lg w-full px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
      </div>
      <div>
        <label className="block text-md font-bold text-gray-700">Password</label>
        <input onChange={handleChange} type="password" id="password" placeholder='Enter your password' name="password" className="border border-gray-300 rounded-lg w-full px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
      </div>
      <div>
        <button type="submit" className="w-1/3 bg-slate-500 text-white rounded-lg py-2 mt-2 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500">Sign In</button>
      </div>
      <div>
        <p>Don't have account!  <a href="/sign-up"><span className='text-slate-500 font-bold hover:text-slate-900 text-decoration-line: underline'>Sign Up</span></a> </p>
      </div>
    </form>
  </div>
</div>
  )
}

export default SignIn