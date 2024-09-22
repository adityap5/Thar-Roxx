/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react'

const Button = ({name}) => {
  return (
    <div>
    <button className="bg-white text-black px-4 py-2 rounded-lg ml-6 mb-10 font-bold hover:bg-gray-500 transition-colors duration-300">
      {name}
    </button>
    </div>
  )
}

export default Button
