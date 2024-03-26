import React from 'react'
import aboutImg from  './Assets/chefs.png'

function About() {
  return (
    <div className='aboutMain'>
      <div className='aboutMessage'>
        <h1 style={{color:"rgb(244, 206, 20)"}}>Little Lemon</h1><br></br>
        <h3 style={{color:"white"}}>Chicago</h3><br></br>
        <p style={{color:"white"}}>Little Lemon is a Mediterranean-inspired <br></br>cocktail and wine bar that takes <br></br>pride in offering a tantalizing <br></br>menu centered around fresh seafood, <br></br>succulent meats, flavorful charcuterie, <br></br>and locally sourced ingredients.</p>
      </div>
      <div className='aboutImg'>
        <img src={aboutImg} height={"350px"} width={"350px"} />
      </div>
    </div>
  )
}

export default About