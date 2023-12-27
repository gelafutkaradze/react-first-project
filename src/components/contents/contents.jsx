import React from 'react'
import './contents.css'

export const Contents = () => {
  return (
    <>
      <div className='contents-parent'>
        <p className='par-1'>Unlimited movies, TV shows, and more</p>
        <p className='par-2'>Watch anywhere. Cancel anytime.</p>
        <p className='par-3'>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className='input-parent'>
          <div>
            <input placeholder='Email address'></input>
          </div>
          <div className='btn-parent'>
            <button>Get Started</button>
          </div>
        </div>
      </div>
      <div className='opa'></div>
    </>
  )
}

export default Contents
