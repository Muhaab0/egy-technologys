import React from 'react'
import "./Returns.css"
import StarHalfIcon from '@mui/icons-material/StarHalf';
import GrassIcon from '@mui/icons-material/Grass';
import Diversity2Icon from '@mui/icons-material/Diversity2';
export default function Returns() {
  return (
    <div className='returnContainer'>
        <div className='returnsBoxes flex'>

            <div className='returnsBox '>

            <div  className='returnsIcon'>
            <StarHalfIcon style={{fontSize:"60px", color:"#fe4422"}} />
            </div>

            <div className='returnBoxText'>
                <h3 className='returnBoxTextHeader'>Specialised Services</h3>
                <div className='returnBoxTextDesc'>We offer professional services specific to each industry. We can work with your organisation in many different ways from outright purchasing all of your assets to profit sharing. Get in touch today to find out what we can do for you.</div>
            </div>
            </div>


            <div className='returnsBox '>

            <div  className='returnsIcon'>
            <GrassIcon style={{fontSize:"60px", color:"rgb(86, 255, 0)"}} className='returnsIcon' />
            </div>

            <div className='returnBoxText'>
                <h3 className='returnBoxTextHeader'>High Returns</h3>
                <div className='returnBoxTextDesc'>Our tailored services translate into higher returns. We’ve been doing this for a while now and know how to sell and what channels to sell on to ensure a high and quick turnaround on all IT equipment and electronics.</div>
            </div>
            </div>

            <div className='returnsBox '>

            <div  className='returnsIcon'>
            <Diversity2Icon style={{fontSize:"60px", color:"#2196f3"}}  />
            </div>
            <div className='returnBoxText'>
                <h3 className='returnBoxTextHeader'>Transparency</h3>
                <div className='returnBoxTextDesc'>We pride ourselves in offering full transparency to show which items are recycled for precious metals and which are refurbished and resold to end users, ensuring nothing makes its way into landfills here or in Asia.</div>
            </div>
            </div>

        </div>
    </div>
  )
}
