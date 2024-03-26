import React from 'react';
import Logo from './Assets/littlelemonfooterlogo.jpg';
import facebook from './Assets/fb.png';
import instagram from './Assets/insta.png';
import snapchat from './Assets/snap.png';
import twitter from './Assets/twitter.png'

function Footer() {
  return (
    <div className='footerMain'>
      <div className='logos'>
        <img src={Logo} height={"150px"} width={"90px"}/>
        <h4 style={{color:"rgb(73, 94,87)"}}>Follow us on</h4>
          <div className='smedia'>
           <img src={facebook} height={30} width={30} alt=''/>
           <img src={instagram} height={30} width={30} alt=''/>
           <img src={snapchat} height={30} width={30} alt=''/>
           <img src={twitter} height={30} width={30} alt=''/>
          </div>
      </div>
      <div className='quickLink'>
        <h3 style={{color:"rgb(73, 94,87)"}} >Quick Link</h3><br></br>
        <a>Home Page</a><br></br>
        <a>About</a><br></br>
        <a>Reservation</a><br></br>
        <a>Order Online</a><br></br>
        <a>Login</a>
      </div>
      <div className='Contact'>
        <h3 style={{color:"rgb(73, 94,87)"}}>Contact</h3><br></br>
        <h5>123 Stockprt Road<br></br>Greater Manchester</h5><br></br>
        <h5>Tel : +441619500163</h5><br></br>
        <h5>email : info@littlelemon.com</h5>
      </div>
    </div>
  )
}

export default Footer