import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import NavBar from '../components/Nav-bar/Nav-Bar';
import Footer from '../components/Footer/Footer';
import ServicesDetails from '../components/ServicesDetails/ServicesDetails';
import HardWare from '../components/HardWare/HardWare';

export default function Services(props) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
    const location = useLocation();

  return (
    <div>
        <NavBar />
        <ServicesDetails prop={location} />
        <HardWare />
        <Footer />
    </div>
  )
}
