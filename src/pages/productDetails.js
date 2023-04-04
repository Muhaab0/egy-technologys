import React, { useEffect } from 'react'
import NavBar from '../components/Nav-bar/Nav-Bar';
import Footer from '../components/Footer/Footer';
import ProductDetailsSection from '../components/ProductDetails/ProductDetailsSection';

export default function ProductDetails(props) {
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

  return (
    <div>
        <NavBar />
        <ProductDetailsSection props={props} />
        <Footer />
    </div>
  )
}
