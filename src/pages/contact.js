import React, { useEffect } from 'react'
import ContactSection from '../components/ContactUs/Contact'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/Nav-bar/Nav-Bar'

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
        <NavBar />
            <ContactSection/>
        <Footer  prop="Hello"  />
    </div>
  )
}
