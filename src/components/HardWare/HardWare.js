import React from 'react'
import "./HardWare.css"
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook"
import DvrIcon from "@mui/icons-material/Dvr"
import SettingsInputHdmiIcon from "@mui/icons-material/SettingsInputHdmi"
import ScreenshotMonitorIcon from "@mui/icons-material/ScreenshotMonitor"
import StorageIcon from "@mui/icons-material/Storage"
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone"
import { Link } from 'react-router-dom'


export default function HardWare() {
  return (
        <div className='hardContainer'>
             <h2 className='returnContainerHeader'>Reprocessed hardware</h2>
             <div className='hardBoxes flex a-center j-between gap-half'>
                <div className='hardBox'>
                  <div className='hardIcon'>
                      <PhoneIphoneIcon style={{fontSize:"80px", color:"white"}} />
                  </div>
                  <div className='hardText'>
                   
                    <h2>Phones</h2>
                  </div>
                </div>
                <div className='hardBox'>
                  <div className='hardIcon'>
                    <LaptopChromebookIcon style={{fontSize:"80px", color:"white"}} />
                  </div>
                  <div className='hardText'>

                    <h2>Notebooks</h2>
                  </div>
                </div>
                <div className='hardBox'>
                  <div className='hardIcon'>
                    <DvrIcon style={{fontSize:"80px", color:"white"}} />
                  </div>
                  <div className='hardText'>
                
                    <h2>PC-Systems</h2>
                  </div>
                </div>
                <div className='hardBox'>
                  <div className='hardIcon'>
                    <SettingsInputHdmiIcon style={{fontSize:"80px", color:"white"}}  />
                  </div>
                  <div className='hardText'>
                   
                    <h2>Special</h2>
                  </div>
                </div>
                <div className='hardBox'>
                  <div className='hardIcon'>
                    <ScreenshotMonitorIcon style={{fontSize:"80px", color:"white"}} />
                  </div>
                  <div className='hardText'>
                  
                    <h2>Screens</h2>
                  </div>
                </div>
                <div className='hardBox'>
                  <div className='hardIcon'>
                    <StorageIcon  style={{fontSize:"80px", color:"white"}} />
                  </div>
                  <div className='hardText'>
                  
                    <h2>Server</h2>
                  </div>
                </div>


             </div>
                <p style={{marginBottom:"50px"}}>We are happy to advise you about our products. Learn more about our service and our products.</p>
                <Link to='/product'>
                <div className='hardBottun'>OUR PRODUCTS FOR SALE</div>
                </Link>
        </div>
  )
}
