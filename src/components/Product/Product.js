import React from 'react'
import "./Product.css"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import productData from '../../helpers/productData';
import { Link } from 'react-router-dom';


export default function Product() {
  return (
    <div className='productContainer'>
    <h2>OUR PRODUCT CATEGORIES</h2>
    <p>An overwiew of the product categories we sale!</p>
    <div className='productBoxes flex j-evenly gap-half'>
    {
        productData.map((prod)=>{ 
            return(
        
        <div className='productBox' key={prod.name}>
            <Link
             to={`/product/${prod.link}`}
                state={prod}
                 >
            <img src={prod.img} alt="/"/>
            <h3>{prod.name}</h3>
            <p>{prod.Descrip}</p>
            <div className='button flex a-center gap-small'>
                <KeyboardArrowRightIcon />
                WANT TO KNOW MORE
            </div>
            </Link>
        </div>
        )})
    }
      
    </div>
    </div>
  )
}
