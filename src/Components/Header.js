import React from 'react'
import HeaderImage from './Assets/restauranfood.jpg'
import Headerbg from './Assets/headerbg.jpg'
 
function Header() {
  return (
    <div className='headermain' style={{backgroundImage:`url(${Headerbg})`}}>
      <div className='leftbox'>
        <h2>Little Lemon</h2><br></br>
        <h3>Chicago</h3><br></br>
        <p>Welcome to Little Lemon,<br></br> where we offer delicious and fresh cuisine<br></br> inspired by the flavors of the Mediterranean.<br></br> Our menu features a range of tasty <br></br>options that are perfect for any occasion,<br></br> all served in a warm and inviting atmosphere.</p><br></br>
        <button style={{backgroundColor:"rgb(244, 206, 20)" , height:"50px" , width:"200px" , borderRadius:"20px", fontSize:"large"}}>Reserve a table</button>
      </div>
      <div className='rightbox'>
        <img src={HeaderImage} height={400} width={400}/>
      </div>
    </div>
  )
}

export default Header