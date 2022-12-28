import React from 'react';
import './footer.css';
import Git from '@iconscout/react-unicons/icons/uil-github';
import Insta from '@iconscout/react-unicons/icons/uil-instagram';
import Link from '@iconscout/react-unicons/icons/uil-linkedin';

import Wave from '../../img/wave.png';

const Footer = () => {
  return(
    <div className="footer">
        <img src={Wave} alt="" style={{ width: '100%'}} />
        <div className="f-content">
            <span>thiagobarcos@yahoo.com.br</span>
            <div className="f-icons">
                <Git color='#FFF' size='3rem' />
                <Insta color='#FFF' size='3rem' />
                <Link color='#FFF' size='3rem' />
            </div>
        </div>
    </div>
  );
}

export default Footer;