import React from 'react'

const SignUp = () => {
  return (
    <>
    <div style={{height:649}} class="bg-slate-700  flex items-center justify-center">
  <div class="bg-white shadow-blue-900 rounded-lg shadow-2xl sm:w-full md:w-1/3 p-6">
    <h2 class="text-3xl font-semibold mb-8 text-center text-gray-800">Sign Up</h2>
    <form class="space-y-4">
      <div>
        <label for="username" class="block text-md font-bold text-gray-700">Username</label>
        <input type="text" id="username" placeholder='Enter your username' name="username" class="border border-gray-300 rounded-lg w-full px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
      </div>
      <div>
        <label for="email" class="block text-md font-bold text-gray-700">Email</label>
        <input type="email" id="email" placeholder='Enter your email' name="email" class="border border-gray-300 rounded-lg w-full px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
      </div>
      <div>
        <label for="password" class="block text-md font-bold text-gray-700">Password</label>
        <input type="password" id="password" placeholder='Enter your password' name="password" class="border border-gray-300 rounded-lg w-full px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
      </div>
      <div>
        <button type="submit" class="w-1/3 bg-slate-500 font-bold text-white rounded-lg py-3 mt-6 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500">Sign Up</button>
      </div>
      <div>
        <p>Already have an account!  <a href="/sign-in"><span className='text-slate-500 font-bold hover:text-slate-900 text-decoration-line: underline'>Sign In</span></a> </p>
      </div>
    </form>
  </div>
</div>
    </>
  )
}

export default SignUp