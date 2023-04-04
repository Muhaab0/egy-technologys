import React, { useEffect } from 'react'
import AboutPageSection from '../components/AboutPageSection/AboutPageSection'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/Nav-bar/Nav-Bar'

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
        <NavBar />
        <AboutPageSection />
        <Footer />
    </div>
  )
}
