import React, { useState } from 'react'
import "./WhatWeDo.css"
import MinimizeIcon from '@mui/icons-material/Minimize';
import AddIcon from '@mui/icons-material/Add';
import faq from '../../helpers/faq';
import Bussnies from "../../assets/Small-Business-IT-Support-Services-e1581368928499.jpg"

export default function WhatWeDo() {



    const [isOpen, setIsOpen] = useState(1);
    const [Current, setCurrent] = useState(1);
    
    const Faq = (i) => {
        if (Current === i) {
            setIsOpen(current => !current)
            Current(Current => !Current)
        } }



  return (
    <div className='whatContainer'>
    <h2>What We Do ?</h2>
    <p className='whatContainerP'>We Are A global partner who puts your business before theirs</p>
        <div className='WhatBoxContainer flex j-evenly a-center gap-half '>
        
        <div className='WhatImage'>
                <img src={Bussnies} alt="busnies"/>
        </div>
        <div className='WhatBox'>

{
        faq.map((fq,i) =>  {
            return(
        <div className='faq'  key={i}>

                <div className='content flex j-between a-center gap-half' onClick={ () =>{
                Faq(i);
                setCurrent(i);
                }} >

                <div className='sub' >
                <p className='faqSubTitle'>
                {fq.quote}
                </p>
                </div>
                <div className="icons">

                    {isOpen && Current === i ? <MinimizeIcon /> : <AddIcon />}

                </div>
                </div>
                <div className={`title ${isOpen && Current === i ? "" : "none"}`}>{fq.answer}</div>

                </div>
        )})}

        </div>


        </div>
    </div>
  )
}
