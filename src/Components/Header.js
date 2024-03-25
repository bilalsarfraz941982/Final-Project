import React from 'react'
import HeaderImage from './Assets/restauranfood.jpg'

function Header() {
  return (
    <div className='headermain'>
      <div className='leftbox'>
        <h2>Little Lemon</h2><br></br>
        <h4>Chicago</h4><br></br>
        <p>Welcome to Little Lemon,<br></br> where we offer delicious and fresh cuisine<br></br> inspired by the flavors of the Mediterranean.<br></br> Our menu features a range of tasty <br></br>options that are perfect for any occasion,<br></br> all served in a warm and inviting atmosphere.</p>
      </div>
      <div className='rightbox'>
        <img src={HeaderImage} height={250} width={300}/>
      </div>
    </div>
  )
}

export default Header