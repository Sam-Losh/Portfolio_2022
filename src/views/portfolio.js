import * as React from "react";
import { useState } from 'react';
import  {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' 
import ContactForm from '../components/contactform';
import samplepic from '../images/EAsample.jpg'

let scroll = 0;
let wheel = 0;
let scrollingDirection = 0;
const Portfolio = () => {
  const [contVis, setContVis] = useState('content0')
  const [boxVis1, setBoxVis1] = useState('content0')
  const [boxVis2, setBoxVis2] = useState('content0')
  const [boxVis3, setBoxVis3] = useState('content0')
  const [contVis2, setContVis2] = useState('content0')
  const [boxVis4, setBoxVis4] = useState('content0')
  const [boxVis5, setBoxVis5] = useState('content0')
  const [boxVis6, setBoxVis6] = useState('content0')
  const [contVis3, setContVis3] = useState('content0')
  const [boxVis7, setBoxVis7] = useState('content0')
  const [boxVis8, setBoxVis8] = useState('content0')
  const [boxVis9, setBoxVis9] = useState('content0')
  const [boxVis10, setBoxVis10] = useState('content0')
  const [boxVis11, setBoxVis11] = useState('content0')
  const [waveani, setWaveAni] = useState('content0')
  const [nameFade, setNameFade] = useState('Title1')
  const [aboutFade, setAboutFade] = useState('Title0')
  const [sampleFade, setSampleFade] = useState('Title0')
  const [contactFade, setContactFade] = useState('Title0')

  const change=()=>{setTimeout(() => {
    scrollingDirection = 0;
    console.log('BLLOOOPP')
  }, 2500);
}

const handleScroll = (e) =>{
  let y = e.deltaY;
  if(y > 1 && scrollingDirection != 1 ){
    scroll++;
    if(wheel == 0){
      if(scroll > wheel){
        scrollingDirection = 1;
        wheel=1;
        scroll=1;
        setContVis('content');
        setBoxVis1('box1a');
        setBoxVis2('box2a');
        setBoxVis3('box3a');
        setWaveAni('waves1');
        setNameFade('Title2')
        setAboutFade('Title1')
        change()
      }
    }else if(wheel == 1){
      if(scroll>wheel){
        scrollingDirection = 1;
        wheel=2;
        scroll = 2;
        setBoxVis1('box1b')
        setBoxVis2('box2b')
        setBoxVis3('box3b')
        setBoxVis4('box4')
        setBoxVis5('box5')
        setBoxVis6('box6')
        setWaveAni('waves2')
        setAboutFade('Title2')
        setSampleFade('Title3')
        change()
      }
    }else if(wheel == 2 || wheel == 3){
      if(scroll>wheel){
        wheel=3;
        scroll = 3;
    setBoxVis4('box4b')
    setBoxVis6('content0')
    setBoxVis7('box7')
    setBoxVis8('box8')
    setBoxVis9('box9')
    setBoxVis10('box10')
    setBoxVis11('box11')
    setWaveAni('waves3')
    setSampleFade('Title4')
    setContactFade('Title5')
    change()
}}}else if(y < -1 && scrollingDirection != 1){
    if(wheel == 1){
      scroll--;
      if(scroll < wheel){
        wheel=1;
        scroll=1;
        
      }
    }else if(wheel == 2){
      scroll--;
      if(scroll<wheel){
        scrollingDirection = 1;
        wheel=1;
        scroll=1;
        setBoxVis4('box4b');
        setBoxVis6('content0');
        setBoxVis1('box1');
        setBoxVis2('box2');
        setBoxVis3('box3');
        setWaveAni('waves1');
        setAboutFade('Title1')
        setSampleFade('Title4')
        change()
      }
    }else if(wheel == 3){
      scroll--;
      if(scroll<wheel){
        scrollingDirection = 1;
        wheel=2;
        scroll = 2;
        setBoxVis4('box4')
        setBoxVis5('box5')
        setBoxVis6('box6')
        setBoxVis7('box7b')
        setBoxVis8('box8b')
        setBoxVis9('box9b')
        setBoxVis10('box10b')
        setBoxVis11('box11b')
        setWaveAni('waves2')
        setContactFade('Title6')
        setSampleFade('Title3')
        change()
        
      }
    }
  }
}

  return (
    <div className = 'Night' onWheel={handleScroll}>
      <div className = {nameFade}>
        <h1>Sam Losh</h1>
        <h4>Web designer</h4>
      </div>
    <div className={aboutFade}>
        <h1>About me</h1>
    </div>
      <div className = {sampleFade}>
        <h1>Project Sample</h1>
      </div>
      <div className = {contactFade}>
        <h1>Contact me</h1>
      </div>
      <div className = 'sky'>
        <div className = 'cloud1'></div>
        <div className = 'cloud2'></div>
        <div className = 'cloud3'></div>
        <div className = 'cloud4'></div>
        <div className = 'cloud5'></div>
        <div className = 'cloud6'></div>
        <div className = 'cloud7'></div>
        <div className = 'cloud8'></div>
        <div className = 'moon'></div>
        <div className = 'spot1'></div>
        <div className = 'spot2'></div>
        <div className = 'spot3'></div>
      </div>
      <div className = 'land1'>
        <div className = 'mountain1'></div>
        <div className = 'shade1'></div>
        <div className = 'mountain2'></div>
        <div className = 'shade2'></div>
        <div className = 'mountain3'></div>
        <div className = 'mountain4'></div>
      </div>
      <div className = 'land2'>
        <div className = 'mountain5'></div>
        <div className = 'mountain6'></div>
        <div className = 'mountain7'></div></div>

        <div className={contVis}  >
          <div className={boxVis1}>
          </div>
          <div className={boxVis2}>
              <p>Hi, my name is Sam<span>(They/Them)</span></p> 
              {/* Write about background */}
          </div>
          <div className={boxVis3}>
              <p>Nunc aliquam augue vel auctor congue. Nunc euismod nisl elit, a volutpat sem tristique non. Nullam sit amet facilisis turpis, vitae tempus lectus. Aliquam luctus scelerisque sapien, non convallis urna tempor in. Ut sit amet diam enim. Phasellus nisl lacus, mollis sed ullamcorper ut, rutrum ut leo. Fusce finibus ex hendrerit, scelerisque mi in, vulputate enim. Etiam urna eros, hendrerit nec elit id, mattis sodales ligula. Morbi commodo neque sit amet finibus ultricies. <Link to={'/About'} id='link'>Learn More!</Link></p>
              {/* Write about how designs wait to come alive by the designers hand */}
        </div>
        <img src={samplepic} className={boxVis4}/>
          <div className={boxVis6}>
              <p>This is one of my most recent projects I have been working on. <Link to={'/Sample'} id='link'>Learn More!</Link></p>
              {/* Summarize professionally, find sources to inspire off of */}
              </div>
              <div className={boxVis7}>
          <a href="https://github.com/Sam-Losh"><FontAwesomeIcon icon={brands('github')} className="icon"/></a>
          </div>
          <div className={boxVis8}>
            <p>You can reach me directly at my email: sam.losh.designs@gmail.com</p>
            <p>Or fill out the form below! I will respond back as soon as possible.</p>
            <ContactForm/>
          </div>
            <div className={boxVis9}>
            <a href="https://www.linkedin.com/in/sam-losh-designs/"><FontAwesomeIcon icon={brands('linkedin')} className="icon"/></a>
            </div>
            <div className={boxVis10}>
                <a href="https://codepen.io/sam-losh"><FontAwesomeIcon icon={brands('codepen')} className="icon"/></a>
            </div>
            <div className={boxVis11}>
            <a href="https://www.instagram.com/samloshdesigns/?hl=en"><FontAwesomeIcon icon={brands('instagram')} className="icon"/></a>
            </div>
        </div>
        {/* <div className='navbar'>
        <div className='navbox'>
              <Link to='/About'>About</Link>
              <Link to='/Sample'>Sample</Link>
              <Link to='/Contact'>Contact</Link>
          </div>
          <button className='navbutt'></button>
          
        </div> */}
        <div className = 'water' >
          <div className={waveani}></div>
          <div className={waveani}></div>
          <div className={waveani}></div>
          <div className={waveani}></div>
          <div className={waveani}></div>
        </div>
    </div>
  );
}

export default Portfolio;