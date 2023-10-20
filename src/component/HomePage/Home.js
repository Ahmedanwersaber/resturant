import React from 'react'
import NavItem from '../Navs/Nav'
import HederItem from '../Header/HederItem'
import UtiltyItem from '../Utilty/UtiltyItem'
import About from '../About/About'
import Explore from '../Explore/Explore'
import Paralex from '../Paralex/Paralex'
import Orders from '../Orders/Orders'
import Slider from '../slider/slider'
import Footer from '../Footer/Footer'

const  Home=()=> {
  return (
    <div>
     <NavItem/>
    <HederItem/>
    <UtiltyItem/>
    <About/>
   <Explore/>
<Paralex/>
 <Orders/>
 <Slider/>
 <Footer/>
    </div>
  )
}

export default Home
