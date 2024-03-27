import React from 'react'
import Header from './Header'
import HightLights from './HightLights'
import Customer from './Customer'
import About from './About'

function Main() {
  return (
    <div className='mainbox'>
        <Header/>
        <HightLights/>
        <Customer/>
        <About/>
    </div>
  )
}

export default Main