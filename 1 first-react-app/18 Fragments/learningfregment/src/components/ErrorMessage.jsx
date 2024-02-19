import React from 'react'

const ErrorMessage = ({data}) => {
  

  return (
    <div>{data.length === 0 && <h3 className='text-center  fs-1'>Shopping List</h3> }</div>
  )
}

export default ErrorMessage