import React from 'react';
import Andy from './Assets/customer1.jpeg';
import Sharan from './Assets/customer2.jpeg';
import Bilal from './Assets/customer3.jpeg';
import fourstar from './Assets/4star.jpg';
import fivestar from './Assets/5star.jpg'

function Customer() {
  return (
    <div className='customermain'>
      <div className='cHeader'>
        <h1>What our customers say about us !!</h1>
      </div>
      <div className='customerRating'>
        <div className='customer1'>
          <img src={Andy} style={{borderRadius:"100px"}}/>
          <h3>Andy</h3>
          <p>"Excellent food, service well priced <br></br> and offer discount for NHS staff.<br></br> Very busy for Saturday lunch time."</p>
          <img src={fivestar}/>
        </div>
        <div className='customer2'>
        <img src={Sharan} style={{borderRadius:"100px"}}/>
          <h3>Sharan</h3>
          <p>"I ordered chicken Szechuan with <br></br>fries and brownie and custard. It was <br></br>delicious and our waiter Haris <br></br>was really helpful and nice and gave<br></br> us the best service we have had so <br></br>far coming to MyLahore. Thanks Haris."</p>
          <img src={fivestar}/>
        </div>
        <div className='customer3'>
        <img src={Bilal} style={{borderRadius:"100px"}}/>
          <h3>Bilal</h3>
          <p>"Nice place to eat, has a <br></br>good variety on the menu too, <br></br>Nice decor."</p>
          <img src={fourstar}/>
        </div>
      </div>
    </div>
  )
}

export default Customer