import React from 'react'
import "./AboutPageSection.css"

export default function AboutPageSection() {
  return (
    <div className='aboutContainer'>
        <div className='aboutCompany flex  j-center gap'>


            <div className='aboutCompanyText'>
                <h2>About EGY Technology</h2>
                <p>We are wholesalers/ exporters, specialised in recycling,refurbishment and reselling of computers/mobile phones. We exceed in remarketing and reselling of IT/mobile phone equipment, with a variety of international markets. With over 12 years experience in the IT trade, our professionally diverse team will be happy to assist you with your enquiries.</p>
            </div>
        </div>
            <div className='aboutMission'>
                <div className='aboutMissionContainer'>
                    <h2>Our Mission</h2>
                    <p>Our mission is to reduce the environmental impact of used IT equipment by offering a globally established base for IT resale.</p>
                </div>

                <div className='aboutMissionContainer'>
                    <h2>Our Vision</h2>
                    <p>Our vision is to sustain the digital world and to reduce e-waste globally.</p>
                </div>

                <div className='aboutMissionContainer'>
                <h2>Our Values</h2>
                <p>Our values are to be dedicated,loyal and honest in maintaining a greener future whilst obtaining and economic growth.</p>
                </div>
            </div>
    </div>
  )
}
