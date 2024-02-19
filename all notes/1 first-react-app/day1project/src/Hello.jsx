import React from 'react'

const Hello = () => {
  let myname ="sahil";
  let number = 456;
  let fullName =()=> "sahil shrivastava";
  return (
    <div>Hello this is the future speaking${myname}{fullName()}{number}</div>
  )
}

export default Hello