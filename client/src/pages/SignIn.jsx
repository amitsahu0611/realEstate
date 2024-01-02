import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {

  const[formData,setFormData] = useState({})
  const[error,setError] = useState(null)
  const[loading, setLoading] = useState(false)

  const navigate = useNavigate();


  const handleChange = (e)=>{
      setFormData({
        ...formData,  // let you copy the data of formdata
        [e.target.id]:e.target.value
      })
  }
// we will create proxy so that it will request to correct address
const handleSubmit = async(e)=>{ // it is more safe because json is readable and writable by machines and computer
  e.preventDefault()
  setLoading(true);
  const res = await fetch('/api/signIn',{
    // and if you are using axios write in script (proxy:'http://localhost/3000')
    method:'POST', 
    headers:{
      'Content-Type':'application/json',
    },
    body:JSON.stringify(formData), 
  })
  const data = await res.json();
  if(data.success === false)
  {
    setError(data.message);
    setLoading(false);
    return;
  }
  setLoading(false)
  setError(null)
  navigate('/')
}

  return (
    <div style={{height:649}} className="bg-slate-700 flex items-center justify-center">
  <div className="bg-white shadow-blue-900 rounded-lg shadow-2xl sm:w-full md:w-1/3 p-6">
    <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800">Sign In</h2>
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-md font-bold text-gray-700">Email</label>
        <input onChange={handleChange} type="text" id="email" placeholder='Enter your email' name="email" className="border border-gray-300 rounded-lg w-full px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
      </div>
      <div>
        <label className="block text-md font-bold text-gray-700">Password</label>
        <input onChange={handleChange} type="password" id="password" placeholder='Enter your password' name="password" className="border border-gray-300 rounded-lg w-full px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
      </div>
      <div>
        <button disabled={loading} type="submit" className="w-1/3 bg-slate-500 text-white rounded-lg py-2 mt-2 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500">
        {loading ? 'Loading ...' : 'Sign In'}
        </button>
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