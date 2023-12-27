import React from 'react'
import './header.css'

export const Header = () => {
  return (
    <>
      <div className='header-parent'>
        <div className='netflix'>
          <p>NETFLIX</p>
        </div>
        <div className='option'>
          <p>English</p>
          <button>SignIn</button>
        </div>
      </div>
    </>
  )
}

export default Header
