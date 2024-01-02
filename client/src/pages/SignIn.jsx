import React from 'react'

const SignIn = () => {
  return (
    <div style={{height:649}} className="bg-slate-700 flex items-center justify-center">
  <div className="bg-white shadow-blue-900 rounded-lg shadow-2xl sm:w-full md:w-1/3 p-6">
    <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800">Sign In</h2>
    <form className="space-y-4">
      <div>
        <label for="username" className="block text-md font-bold text-gray-700">Username</label>
        <input type="text" id="username" placeholder='Enter your username' name="username" className="border border-gray-300 rounded-lg w-full px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
      </div>
      <div>
        <label for="password" className="block text-md font-bold text-gray-700">Password</label>
        <input type="password" id="password" placeholder='Enter your password' name="password" className="border border-gray-300 rounded-lg w-full px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
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