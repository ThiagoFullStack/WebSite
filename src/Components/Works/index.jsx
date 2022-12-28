import {React, useContext }from 'react';
import './works.css';
import Upwork from '../../img/Upwork.png';
import Fiverr from '../../img/fiverr.png';
import Amazon from '../../img/amazon.png';
import Shopify from '../../img/Shopify.png';
import Facebook from '../../img/Facebook.png';
import { themeContext } from '../../Context';
import { motion } from 'framer-motion';


const Works = () => {

  const transition = {duration : 3.5, type: 'spring'}

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return(
    <div className="works">
        <div className="awesome">
        {/* left side */}
            <span  style={{color: darkMode? '#FFF': ''}}>Works for all these</span>
            <span>Brands & clients</span>
            <spane>
            We know that those who buy online are looking for attractive and approved prices.<br />
             In fact, most of the time, e-commerce practices values ​​below those of conventional commerce.
               <br /> 
               And this reduction in time spent — added to efficient logistics,<br />
                in which it is possible to monitor the delivery time and<br />
                 the location of the order in real time — brings a lot of comfort to the consumer.
               <br /> 
               In addition, the internet makes it easier for this individual to search for the same product <br />
                in several online stores, comparing prices, delivery times and payment terms.
               <br /> 
               Credit card, debit card or Pix is ​​one of the most used forms of payment these days.<br />
                Aware of this reality, e-commerce has made it easier for consumers to make purchases.
            </spane>     
                <button className="button s-button">Hire me</button>
            <div className="blur s-blur" style={{ background: '#ABF1FF94', top: '250px', left: '-150px' }}></div>
        </div>
        {/* right side */}
        <div className="w-right">
          <motion.div 
            initial={{ rotate: 90 }}
            whileInView={{ rotate: 0}}
            viewport={{ margin: '-40px'}}
            transition={{ transition }}
            className="w-mainCircle"
          >
            <div className="w-secCircle">
              <img src={Upwork} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={Fiverr} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={Amazon} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={Shopify} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={Facebook} alt="" />
            </div>
          </motion.div>
          {/* background Circles */}
          <div className="w-backCircle blueCircle"></div>
          <div className="w-backCircle yellowCircle"></div>
        </div>
    </div>
  );
}

export default Works;