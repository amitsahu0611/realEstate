import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className='bg-slate-100 flex'>

        <Link to="/">
        <h1 className='w-1/3 px-10 py-5 text-3xl'>
            <span className='font-bold text-rose-700'>Real</span>
            <span className='font-bold text-rose-900'>Estate</span>
        </h1>
        </Link>
        
        
        <div className='w-1/5  mx-auto py-5'>
            
        <form className="flex items-center">   
          <input type="text" id="simple-search" className=" border border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:placeholder-gray-800 text-dark  " placeholder="Search branch name..." required/>
          <button type="submit" className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-800 ">
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
            <span className="sr-only">Search</span>
         </button>
        </form>
        </div>

        <div className='w-1.4/3'>
            <ul className='flex px-8'>
               <Link to='/'> <li className='text-dark hover:text-blue-600 px-3 py-2 text-lg font-medium py-5 px-10'>Home</li></Link>
               <Link to='/about'> <li className='text-dark hover:text-blue-600 px-3 py-2 text-lg font-medium py-5 px-10'>About</li></Link>
                <Link to='/profile'><li className='text-dark hover:text-blue-600 px-3 py-2 text-lg font-medium py-5 px-10'>Profile</li></Link>
                <Link to='/sign-in'><li className='text-dark hover:text-blue-600 px-3 py-2 text-lg font-medium py-5 px-10'>Sign In</li></Link>
            </ul>
        </div>
    </div>
  )
}

export default Navigation