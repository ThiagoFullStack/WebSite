import React from 'react';
import './experience.css';

const Experience = () => {
  return(
    <div className="experience" id='Experience'>
        <div className="achievement">
            <div className="circle">3+</div>
            <span>years </span>
            <span>Experience</span>
        </div>
        <div className="achievement">
            <div className="circle">17+</div>
            <span>completed </span>
            <span>Projects</span>
        </div>
        <div className="achievement">
            <div className="circle">5+</div>
            <span>companies</span>
            <span>Work</span>
        </div>
        <div className="blur p-blur2" style={{background: 'var(--purple)', left: '800px',  marginTop: '2600px'}}></div>
    </div>
  );
}


export default Experience;