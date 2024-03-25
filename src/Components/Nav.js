import React from 'react'
import LLName from './Assets/littlelemonlogo.png'

function Nav() {
  return (
   <>
    <div className='mainNav'>
    <div className='navigationPicture'>
       <img src={LLName} height={60} width={200}/>
    </div>
    <div className='navigationList'>
        <ul className='navList'>
            <li><a>Home</a></li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservation</li>
            <li>Order Online</li>
            <li>Login</li>
        </ul>
    </div>
    </div>
   </>
  )
}

export default Nav