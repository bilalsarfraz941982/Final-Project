import React from 'react'
import LLName from './Assets/littlelemonlogo.png'

function Nav() {
  return(
    <div className='mainNav'>
     <div className='navigationPicture'>
       <img src={LLName} height={60} width={200}/>
     </div>
     <div className='navigationList'>
        <ul className='navList'>
            <a>Home</a>
            <a>About</a>
            <a>Menu</a>
            <a>Reservation</a>
            <a>Order Online</a>
            <a>Login</a>
        </ul>
     </div>
    </div>
  )
}

export default Nav