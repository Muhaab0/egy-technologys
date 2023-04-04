import React, { useEffect } from 'react'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/Nav-bar/Nav-Bar'
import Product from '../components/Product/Product'

export default function OurProduct() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
        <NavBar />
        <Product />
        <Footer />
    </div>
  )
}
