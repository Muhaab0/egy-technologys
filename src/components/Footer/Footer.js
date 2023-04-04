import React from 'react'
import { ContactSectionMini } from '../ContactUs/Contact'
import "./Footer.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';

import services from "../../helpers/serviceData"

export default function Footer({prop}) {
  return (
    <div className='footerContainer'>
    {
    prop ? "" : (
    <ContactSectionMini />
    )
    }
        <div className='footerBoxes flex  j-between'>
            <div className="footerContact">
                <h3>CONTACT DETAILS</h3>
                <p className='footerAdress'>40-46 Ashton Old Rd, Manchester M12 6LP,<br/>
                 United kingdom.</p>
                <div className='phoneNumber'>
                <p>
                Phone: 016 15377 966
                </p>
                <p>
                Email: info@egytechnology.co.uk
                </p>
                </div>
            </div>

            <div className='footerLinks'>
            <h3>BROWSE FURTHER</h3>
            <div className='footerLinksContainer flex'>
            <p>
                <Link to="/dataSecurity">Data Security</Link>
                </p>
                <p>
                <Link to={`/service/IT-Disposal&Recycle`} state={services[0].subDescription}>Disposal</Link>
                </p>
                <p> <Link to={`/service/IT-Deposal&Recycle`} state={services[0].subDescription}>Recycling</Link>
                </p>
                <p><Link to={`/service/Purchase!`} state={services[1].subDescription}>Purchase
                </Link></p>
                <p><Link to={`/service/Offers!`} state={services[2].subDescription}>
                Offers
                </Link></p>
                <p><Link to="/solutions">
                Solutions</Link></p>
                <Link to="/product">
                <p>Our Products</p>
                </Link>
            </div>
            </div>

            <div className="footerPlatForms">
                <h3>FOLLOW US</h3>
                <div className='footerPlatFormsContaner flex gap-half'>
                <p><FacebookIcon /></p>
                <p><TwitterIcon /></p>
                <p><InstagramIcon /></p>
                </div>
                <h2> <Link to="/about">About</Link></h2>
                <p><Link to="/about">Our Company</Link></p>
            </div>
        </div>
        <hr className='footerHr'/>
            <p className='footerCopyRight'>Copyright © 2023 EGY Technology Ltd</p>
    </div>
  )
}
