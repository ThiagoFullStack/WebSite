import React from 'react';
import './card.css';
import { FiLink } from "react-icons/fi";

const Card = ({emoji, heading, detail, link}) => {

  return(
    <div className='card'>
        <img src={emoji} alt="emoji" />
        <span>{heading}</span>
        <span>{detail}</span>
        <a href={link}>
            <button className="c-button">
              LEARN MORE <FiLink size={30} color={'var(--orange)'}/> </button>
        </a>
    </div>
  )
}

export default Card;