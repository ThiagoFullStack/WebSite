import {React, useContext} from 'react';
import './services.css';
import Card from '../Card';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png';
import Resume from './resume.pdf';
import { themeContext } from '../../Context';
import { motion } from 'framer-motion';


const Services = () => {

    const transition = {duration : 2, type: 'spring'}

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return(
    <div className="services" id='Services'>

        {/* left side */}
        <div className="awesome">
            <span style={{color: darkMode? '#FFF': ''}}>My Awesome</span>
            <span>services</span>
            <span>
               Lorem ispum is simgle dummy text of printing of printing Lorem
               <br /> 
               Lorem ispum is simgle dummy text of printing
            </span>
            <a href={Resume} download>
                <button className="button s-button">Download</button>
            </a> 
            <div className="blur s-blur" style={{ background: '#ABF1FF94', top: '250px', left: '-150px' }}></div>
        </div>

        {/* right side */}
        <div className="cards">
            <motion.div 
                whileInView={{left: '14rem'}}
                initial={{left: '20rem'}}
                transition={transition}
                style={{left: '14rem'}}>
                <Card
                    link = {'https://www.youtube.com/watch?v=W0bPsPHAjrQ&list=PLuDfCQO9tvX0kDmh4cjo30uidCeJ-iZE6'}
                    emoji = {HeartEmoji}
                    heading = {'UX/UL Designer'}
                    detail = {'Figma, Gimp, Photoshop, Scrum(Ágil)'}
                />
            </motion.div>
            {/* second card */}

            <motion.div 
                whileInView={{left: '-5rem'}}
                initial={{left: '-15rem'}}
                transition={transition}
                style={{top: '12rem', left: '-4rem'}}>
                <Card
                    link = {'https://www.youtube.com/@programacaoweb/playlists'}
                    emoji = {Glasses}
                    heading = {'Developer'}
                    detail = {'Html, Css, Javascript, React, Node'}
                />
            </motion.div>
           
            {/* third card */}
            <motion.div 
                initial={{left: '30rem'}}
                whileInView={{left: '14rem'}}
                transition={transition}
                style={{top: '19rem', left: '12rem'}}>
                <Card
                    link = {'https://www.youtube.com/watch?v=Ofktsne-utM&list=PLHz_AreHm4dkBs-795Dsgvau_ekxg8g1r'}
                    emoji = {Humble}
                    heading = {'Database'}
                    detail = {'Firebase, Mysql, Sql-Server, MongoDB'}
                />
            </motion.div>
            <div className="blur s-blur2" style={{background: 'var(--purple)'}}></div>
        </div>
    </div>
  )
}

export default Services;