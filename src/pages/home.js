import React, { useEffect, useState } from 'react'
import About from '../components/About/About'
import Footer from '../components/Footer/Footer'
import HardWare from '../components/HardWare/HardWare'
import Hero from '../components/Hero/Hero'
import NavBar from '../components/Nav-bar/Nav-Bar'
import OurService from '../components/OurServices/OurService'
import Returns from '../components/Returns/Returns'
import { useLocation } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';

export default function Home() {
  const [isOpen, setIsOpen] = useState(true)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const state = useLocation();




  

  return (    
    <div>
    {
    
    state.state?.name ? (
      <div className={` ConfirmationMessage ${isOpen ? "block" : "" }   `}>
      <CloseIcon onClick={() => setIsOpen(false)} className="ConfirmationClose" />
      <h2>Hello, <p>{state.state.name}</p></h2>
        <p>Thank u for contacting us <br/> we will reply to you as soon as we can.   </p>
        <button onClick={(e)=> setIsOpen(false)}>Ok</button>
      </div>
      
    ): ""
  } 

        <NavBar />
        <Hero/>
        <Returns />
        <OurService />
        <About />
        <HardWare />
        <Footer />
    </div>
  )
}
