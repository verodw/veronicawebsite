import React from 'react'

const TabButton = ({ active, selectTab, children }) => {
const buttonClasses  = active ? 'text-white border-b border-pink-600' : 'text-[#d8bfd8]'
  return (
    <button onClick={selectTab}>
        <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
        </p>
    </button>
  )
}

export default TabButton