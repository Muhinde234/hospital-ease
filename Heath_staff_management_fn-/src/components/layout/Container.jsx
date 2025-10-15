import React from 'react'

const Container = ({className,children}) => {
  return (
    <div className={`container mx-auto lg:px-12 ${className}`}>
     {children}   
    </div>

  )
}

export default Container