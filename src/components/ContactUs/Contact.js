import React from 'react'
import "./Contact.css"
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ApartmentIcon from '@mui/icons-material/Apartment';
import CallIcon from '@mui/icons-material/Call';
import MailForm, { MailFormMini } from '../../helpers/email';

 export default function ContactSection() {
  return (
    <div className='ContactContainer' >
        <div className='contactFlex flex  j-center gap'>
            <div className='companyInfo'>
                <h3>Let’s Work Together!</h3>
                <div className='MailDetails flex a-center  gap-small'>
                    <MailOutlineIcon />
                    <p>info@egytechnology.co.uk</p>
                </div>
                <div className='companyLocation  flex a-center  gap-small'>
                    <ApartmentIcon />
                    <p>40-46 Ashton Old Rd, Manchester M12 6LP, United kingdom.</p>
                </div>
                <div className='companyPhone  flex a-center  gap-small'> 
                <CallIcon />
                <p>016 15377 966</p>
                </div>
            </div>
                <MailForm />
        </div>
    </div>
  )
}

 export function ContactSectionMini() {
  return (
    <div className='ContactContainer Mini flex a-center gap-half ' >
       <h2>Contact</h2>
            <MailFormMini />
    </div>
  )
}



