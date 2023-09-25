import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'

const SideBar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  return (!isMenuOpen) ? null : (
    <div className='w-48 shadow-lg bg-gray-100'>
      <div className='pl-5 pt-5'>
        <h1 className='font-bold my-1 bg-slate-100 rounded-sm cursor-pointer'><Link to={"/"}>Home</Link></h1>
        <h1 className='font-bold my-1 bg-slate-100 rounded-sm'>Shorts</h1>
        <h1 className='font-bold mt-1 bg-slate-100 rounded-sm'>Subscriptions</h1>
        <ul>
          <li className='border border-gray-50 shadow-sm hover:bg-gray-200 cursor-pointer mt-1 rounded-lg'>Music</li>
          <li className='border border-gray-50 shadow-sm hover:bg-gray-200 cursor-pointer mt-1 rounded-lg'>Sports</li>
          <li className='border border-gray-50 shadow-sm hover:bg-gray-200 cursor-pointer mt-1 rounded-lg'>Gaming</li>
          <li className='border border-gray-50 shadow-sm hover:bg-gray-200 cursor-pointer mt-1 rounded-lg'>Movies</li>
        </ul>
      </div>
      <div className='pl-5 pt-5'>
        <h1 className='font-bold bg-slate-100 rounded-sm'>Watch Later</h1>
        <ul>
          <li className='border border-gray-50 shadow-sm hover:bg-gray-200 cursor-pointer mt-1 rounded-lg'>Music</li>
          <li className='border border-gray-50 shadow-sm hover:bg-gray-200 cursor-pointer mt-1 rounded-lg'>Sports</li>
          <li className='border border-gray-50 shadow-sm hover:bg-gray-200 cursor-pointer mt-1 rounded-lg'>Gaming</li>
          <li className='border border-gray-50 shadow-sm hover:bg-gray-200 cursor-pointer mt-1 rounded-lg'>Movies</li>
        </ul>
      </div>
    </div>
  )
}

export default SideBar