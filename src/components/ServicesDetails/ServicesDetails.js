import React from 'react'
import "./ServicesDetails.css"

export default function ServicesDetails(prop) {
    const path = prop.prop.pathname
    const newpath = path.split("/" ,-2)
    const title = newpath[2]
  return (
    <div className='ServiceDetail'>
        <h2 className='serviceDetailTitle'>{title}</h2>
        <div className='serviceDetailDescription'>
        <div
                dangerouslySetInnerHTML={{__html:prop.prop.state}}>
              </div>
        
        </div>
    </div>
  )
}
