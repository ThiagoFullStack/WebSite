import React from 'react';
import './floatingdiv.css';



const FloatingDiv = ({images, txt1, txt2}) => {
  return(
    <div className='floatingdiv'>
        <img src={images} alt="" />
        <span>
          {txt1} 
          <br />
          {txt2}
        </span>
    </div>
  )
}


export default FloatingDiv;