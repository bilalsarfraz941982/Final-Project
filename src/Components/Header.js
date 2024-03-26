import React from 'react'
import HeaderImage from './Assets/restauranfood.jpg'
import Headerbg from './Assets/headerbg.jpg';
import {Routes, Route , Link} from 'react-router-dom';
import BookingForm from './BookingForm';

function Header() {
  return (
    <div className='headermain' style={{backgroundImage:`url(${Headerbg})`}}>
      <div className='leftbox'>
        <h2>Little Lemon</h2><br></br>
        <h3>Chicago</h3><br></br>
        <p>Welcome to Little Lemon,<br></br> where we offer delicious and fresh cuisine<br></br> inspired by the flavors of the Mediterranean.<br></br> Our menu features a range of tasty <br></br>options that are perfect for any occasion,<br></br> all served in a warm and inviting atmosphere.</p><br></br>
        <Link to="./BookingPage" className='bookingPage'><button style={{backgroundColor:"rgb(244, 206, 20)" , height:"50px" , width:"200px" , borderRadius:"20px", fontSize:"large"}}>Reserve a table</button></Link>
      </div>
      <Routes>
        <Route path='./BookingPage' element={<BookingForm/>}></Route>
      </Routes>
      <div className='rightbox'>
        <img src={HeaderImage} height={400} width={350}/>
      </div>
    </div>
  )
}

export default Header