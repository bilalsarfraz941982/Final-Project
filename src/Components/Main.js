import React from 'react'
import Header from './Header'
import HightLights from './HightLights'
import Customer from './Customer'
import About from './About'
import Footer from './Footer'

function Main() {
  return (
    <div className='mainbox'>
        <Header/>
        <HightLights/>
        <Customer/>
        <About/>
        <Footer/>
    </div>
  )
}

export default Main