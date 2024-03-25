import React from 'react';
import dish1 from './Assets/greek salad.jpg';
import dish2 from './Assets/bruchetta.jpg'
import dish3 from './Assets/lemon dessert.jpg';
import basket from './Assets/Basket.jpg'

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
            <img src={dish1} height={"300px"} width={"300px"}/>
          </div>
          <div className='nameandprice1'>
            <h3>Greek Salad</h3>
            <h4>$12.99</h4>
          </div>
          <div className='dish1disc'>
            <p>The famous greek salad of crispy lettuce<br></br>, peppers, olives and our Chicago style <br></br>fetancheese, garnished with crunchy garlic <br></br>and rosemary croutons.</p>
          </div>
          <div className='delivery'>
            <h3>Order a delivery</h3>
            <img src={basket} height={"30px"} width={"30px"}/>
          </div>
        </div>
        <div className='dish2'>
        <div className='img1'>
            <img src={dish2} height={"300px"} width={"300px"}/>
          </div>
          <div className='nameandprice1'>
            <h3>Brunchetta</h3>
            <h4>$5.99</h4>
          </div>
          <div className='dish1disc'>
            <p></p>
          </div>
        </div>
        <div className='dish3'>
        <div className='img1'>
            <img src={dish3} height={"300px"} width={"300px"}/>
          </div>
          <div className='nameandprice1'>
            <h3>Greek Salad</h3>
            <h4>$12.99</h4>
          </div>
          <div className='dish1disc'>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HightLights