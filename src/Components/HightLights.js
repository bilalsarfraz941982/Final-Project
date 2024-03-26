import React from 'react';
import dish1 from './Assets/greek salad.jpg';
import dish2 from './Assets/bruchetta.jpg'
import dish3 from './Assets/lemon dessert.jpg';
import basket from './Assets/Basket.svg'

function HightLights() {
  return (
    <div className='mainHighlights'>
      <div className='hightlightHeader'>
        <h1>This weeks special!</h1>
        <button style={{backgroundColor:"rgb(244, 206, 20)" , height:"50px" , width:"150px" , borderRadius:"20px", fontSize:"large"}}>Online menu</button>
      </div>
      <div className='masterswmenu'>
        <div className='dish1'>
          <div className='img1'>
            <img src={dish1} height={"300px"} width={"300px"} style={{borderRadius:"20px"}}/>
          </div>
          <div className='nameandprice1'>
            <h3>Greek Salad</h3>
            <h4 style={{color:"salmon"}}>$12.99</h4>
          </div>
          <div className='dish1disc'>
            <p>The famous greek salad of crispy lettuce<br></br>, peppers, olives and our Chicago style <br></br>fetancheese, garnished with crunchy garlic <br></br>and rosemary croutons.</p>
          </div>
          <div className='delivery'>
            <h3>Order a delivery</h3>
            <img src={basket} height={"30px"} width={"30px"} />
          </div>
        </div>
        <div className='dish2'>
        <div className='img1'>
            <img src={dish2} height={"300px"} width={"300px"} style={{borderRadius:"20px"}}/>
          </div>
          <div className='nameandprice2'>
            <h3>Brunchetta</h3>
            <h4 style={{color:"salmon"}}>$5.99</h4>
          </div>
          <div className='dish1disc'>
            <p>Our Bruschetta is made from  grilled bread<br></br> that has been smeared with garlic and<br></br> seasoned with salt and olive<br></br> oil.</p>
          </div>
          <div className='delivery'>
            <h3>Order a delivery</h3>
            <img src={basket} height={"30px"} width={"30px"}/>
          </div>
        </div>
        <div className='dish3'>
        <div className='img1'>
            <img src={dish3} height={"300px"} width={"300px"} style={{borderRadius:"20px"}}/>
          </div>
          <div className='nameandprice3'>
            <h3>Lemon dessert</h3>
            <h4 style={{color:"salmon"}}>$5.99</h4>
          </div>
          <div className='dish1disc'>
            <p>This comes straight from grandma’s recipe <br></br>book, every last ingredient has been<br></br> sourced and is as authentic as can<br></br> be imagined.s</p>
          </div>
          <div className='delivery'>
            <h3>Order a delivery</h3>
            <img src={basket} height={"30px"} width={"30px"}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HightLights