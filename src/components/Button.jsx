import React from 'react'

const Button = ({children,className}) => {
  return (
   <div className={`rounded-[5px] text-white ${className}`}>{children}</div>
  )
}

export default Button