import React from 'react'
import LLName from './Assets/littlelemonlogo.png'

function Nav() {
  return (
   <>
    <div className='navigationPicture'>
       <img src={LLName} height={200} width={200}/>
    </div>
    <div className='navigationList'>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservation</li>
            <li>Order Online</li>
            <li>Login</li>
        </ul>
    </div>
   </>
  )
}

export default Nav