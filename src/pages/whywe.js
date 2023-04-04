import React, { useEffect } from 'react'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/Nav-bar/Nav-Bar'
import Whywe from '../components/whywe/Whywe'

export default function WhywePage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
        <NavBar />
        <Whywe />
        <Footer />
    </div>
  )
}
