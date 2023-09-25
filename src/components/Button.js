import React from 'react'

const Button = (props) => {
    const {name} = props;
  return (
    <div>
        <button className='px-4 py-1 m-1 whitespace-nowrap text-center bg-gray-400 rounded-xl'>{name}</button>
    </div>
  )
}

export default Button