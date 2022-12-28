import {React, useContext} from 'react';
import './portfolio.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Sidebar from '../../img/port-1.png';
import Ecommerce from '../../img/port-2.png';
import Hoc from '../../img/port-3.png';
import Musicapp from '../../img/port-4.png';
import 'swiper/css';
import { themeContext } from '../../Context';


const linkPort1 = <a href='https://devlinkcb2.netlify.app/' style={{textDecoration: 'none'}}></a>



const Portfolio = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return(
    <div className="portfolio" id='Portfolio'>

        {/* heading */}
        <span  style={{color: darkMode? '#FFF': ''}}>Recent Projects</span>
        <span>Portfolio</span>
        
        {/* slider */}
        <Swiper
            spaceBetween={30}
            slidesPerView={3}
            grabCursor={true}
            className='portfolio-slider'
        >
            <SwiperSlide>
            <a href='https://devlinkcb2.netlify.app/' style={{textDecoration: 'none'}}>
                <span style={{fontSize: '0.5rem', fontWeight: 'bold', color: 'var(--red)'}}>( REACT )</span>
            </a>
                <img src={Sidebar} alt="" />
               
            </SwiperSlide>
            <SwiperSlide>
            <a href='https://filme-prime-flix.netlify.app/' style={{textDecoration: 'none'}}>
                <span style={{fontSize: '0.5rem', fontWeight: 'bold', color: 'red'}}>( API / HTTP )</span>
            </a>
                <img src={Ecommerce} alt="" />
            </SwiperSlide>{" "}
            <SwiperSlide>
            <a href='https://confeitaria-ana-explosao-de-sabores.vercel.app/' style={{textDecoration: 'none'}}>
                <span style={{fontSize: '0.5rem', fontWeight: 'bold', color: 'red'}}>( HTML/CSS )</span>
            </a>
                <img src={Hoc} alt="" />
            </SwiperSlide>
            <SwiperSlide>
            <a href='https://app.powerbi.com/view?r=eyJrIjoiNjYxNzhiZDYtNGQ4Yy00ZWFmLThlMGItOTg1M2JhZTE1NDI4IiwidCI6ImEwZTZhYzBjLTY1MDItNDM1Mi04NmYyLTkyMzA1MTYwNjUxYSJ9' style={{textDecoration: 'none'}}>
                <span style={{fontSize: '0.5rem', fontWeight: 'bold', color: 'red'}}>( POWER BI )</span>
            </a>
                <img src={Musicapp} alt="" />
            </SwiperSlide>
        </Swiper>

         {/* BLUR DIVS */}
         <div className="blur p-blur1" style={{ background: '#ABF1FF94', top: '2900px', left: '-150px'}}></div>
         <div className="blur p-blur2" style={{background: 'var(--purple)',  top: '3400px'}}></div>
    </div>
  );
}

export default Portfolio;