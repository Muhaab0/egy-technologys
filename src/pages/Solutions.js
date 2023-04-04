import React, { useEffect } from 'react'
import NavBar from '../components/Nav-bar/Nav-Bar';
import Footer from '../components/Footer/Footer';
import SolutionDetails from '../components/SolutionsDetails/SolutionDetails';

export default function Solutions() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
        <NavBar />
        <SolutionDetails />
        <Footer />
    </div>
  )
}
