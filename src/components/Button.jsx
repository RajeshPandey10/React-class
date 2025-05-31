import React from 'react'

const Button = ({butttonvitrakrakhney,color}) => {

  return (
  <button style={{color:`${color}`}} className='border p-4 bg-amber-400 rounded-4xl' > 
   {butttonvitrakrakhney}
 
  </button>
  )
  
}

export default Button