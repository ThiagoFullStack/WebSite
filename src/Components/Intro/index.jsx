import {React, useContext} from 'react';
import './intro.css';
import GitHub from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import Boy from '../../img/boy.png';
import Thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import Glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv';
import { themeContext } from '../../Context';
import {motion} from 'framer-motion';

const Intro = () => {

    const transition = {duration : 2, type: 'spring'}

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  return(
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span style={{color: darkMode? '#FFF': ''}}>Hy! I'm </span>
                <span>Thiago Caetano</span>
                <span>Front-End Developer with high
                    level of experience in Web Desihning 
                    and development,<br/> producting the
                    Quality work.
                </span>
            </div>
            <button className="button i-button">Hire me</button>
            <div className="i-icons">
                <a href='https://www.github.com/ThiagoFullStack' target="blank" >
                <img src={GitHub} alt="github" />
                </a>
                <a href='https://www.instagram.com/thiagofullstack/' target="blank" >
                <img src={Instagram} alt="instagram" />
                </a>
                <a href='https://www.linkedin.com/in/thiagocb2-developer-fullstack/' target="blank" >
                <img src={LinkedIn} alt="linkedin" />
                </a>
            </div>
        </div>
        <div className="i-right">
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={Boy} alt="" />
            <motion.img
                initial={{left: "-36%"}}
                whileInView={{left: "-24%"}}
                transition={transition} 
                src={Glassesimoji} alt="" 
            />

            <motion.div 
                initial={{top: '-4%', left: '74%'}}
                whileInView={{left: '68%'}}
                transition={transition}
                className='floating-div'
                style={{top: '-4%', left: '68%'}} 
            >
                    <FloatingDiv images={Crown} txt1='Web' txt2='Developer' />
            </motion.div>
            <motion.div 
                initial={{top: '18rem', left: '-8rem'}}
                whileInView={{left: '0rem'}}
                transition={transition}
                className='floating-div'
                style={{top: '0rem', left: '0rem'}}
            >
                <FloatingDiv images={Thumbup} txt1='Best Design' txt2='Award' />
            </motion.div>
            {/* BLUR DIVS */}
            <div className="blur" style={{ background: 'rgb(238 210 255)' }}></div>
            <div className="blur"  
                style={{ 
                    background: '#C1F5FF',
                    top: '17rem',
                    width: '21rem',
                    height: '11rem',
                    left: '-9rem'
                }}></div>
        </div>
    </div>
  )
}

export default Intro;