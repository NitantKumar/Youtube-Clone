import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utlis/appSlice';

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }
  return (
    <div className='grid grid-flow-col p-2 shadow-md'>
      <div className='flex col-span-1'>
        <img 
          onClick={() => toggleMenuHandler()}
          className='h-8 mt-4 mr-2 cursor-pointer'
          alt='menu'
          src='https://www.svgrepo.com/download/313139/hamburger-menu.svg'
        />
        <img
          className='h-16' 
          alt='youtube-logo'
          src= 'https://brandslogo.net/wp-content/uploads/2016/06/YouTube-icon-400x400.png'
        />
      </div>
      <div className='text-center mt-2 col-span-10'>
        <input className='w-1/2 p-2 border border-gray-500 rounded-l-full' type='text' />
        <button className='border border-gray-500 rounded-r-full px-4 py-2 bg-gray-100'>🔍</button>
      </div>
      <div className='col-span-1'>
        <img 
          className='h-12 mt-2'
          alt='user'
          src='https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg'
        />
      </div>
    </div>
  )
}

export default Head