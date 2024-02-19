import React from 'react'

const Random = () => {

  const randdom = Math.floor(Math.random()*100);
  return (
    <div style={{'backgroundColor':`#776691`}}>the Subscriber: {randdom}</div>
  )
}

export default Random