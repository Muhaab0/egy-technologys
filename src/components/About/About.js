import React from 'react'
import "./About.css"
import company from "../../assets/companys.jpg"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Link } from 'react-router-dom';


export default function About() {
  return (
    <div className='aboutSecContainer'>
        <div className='AboutContainerFlex flex j-center gap'>
            <div className='aboutImage'>
                <img src={company} className="aboutImageimg" alt="about"/>
            </div>
            <div className='aboutText'>
            <h2 className='Header aboutHeader'>EGY TECNOLOGY</h2>
            <h3 className='SubHeader aboutSubHeader'>Your wholesaler for used IT hardware</h3>
                <p className='aboutDesc'>We are a B2B wholesaler specialized in the trade of used computer products.</p>
                <p className='aboutSubDesc'>Our field of expertise lies in the area of IT remarketing: We buy, sell and trade lease returns of IT hardware (mainly PCs, laptops, monitors). With more than 10 years experience in the used IT business, our multilingual team will be happy to assist you.
                </p>
                <p className='aboutSubDecBottom'>Our operational procedure and our trained team ensure a fair and accurate auditing of your devices and the secure deletion of your data.</p>
                <div className='aboutBottun'>
                <Link to="/about">
                <p  className='flex a-center '> <span><KeyboardArrowRightIcon /></span> <span>MORE ABOUT OUR COMPANY</span></p>
                </Link>
                </div>
            </div>
                </div>

        
    </div>
  )
}
