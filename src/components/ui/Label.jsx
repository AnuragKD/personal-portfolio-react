import React from 'react'
import Icon from '../Icon'

const Label = ({ name, children, className = "" }) => {
  return (
    <div className={`w-fit mx-auto flex gap-2 items-center justify-center mb-5 bg-white px-2 rounded-lg border-2 border-gray-200 ${className}`}>
      <Icon name={name} className="w-4 h-auto" />
      <p className='font-normal text-sm text-gray-600'>
        {children}
      </p>
    </div>
  )
}

export default Label