import React, { useEffect } from 'react'
import DataSecurityDetails from '../components/DataSecurityDetails/DataSecurityDetails'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/Nav-bar/Nav-Bar'

export default function DataSecurity() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
        <NavBar />
        <DataSecurityDetails />
        <Footer />
    </div>
  )
}
