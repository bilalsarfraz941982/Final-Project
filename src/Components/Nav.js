import React from 'react'
import LLName from './Assets/littlelemonlogo.png';
import  {Link} from 'react-router-dom';

function Nav() {
  return(
    <div className='mainNav'>
     <div className='navigationPicture'>
       <img src={LLName} height={60} width={200}/>
     </div>
     <div className='navigationList'>
        <ul className='navList'>
            <Link to='/' className='homepage'>Home</Link>
            <a>About</a>
            <a>Menu</a>
            <Link to='/bookingpage' className='booking'>Reservation</Link>
            <a>Order Online</a>
            <a>Login</a>
        </ul>
     </div>
    </div>
  )
}

export default Nav