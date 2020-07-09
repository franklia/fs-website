import React from 'react';
import point from '../images/point.png';

// styles
const CTAWrapper = {
  padding: 30,
  background: 'radial-gradient(circle, rgba(29,112,16,1) 69%, rgba(11,83,0,1) 100%)',
  textAlign: 'center',
  borderBottom: '5px solid #93ca89',
  borderTop: '5px solid #93ca89',
};

// This is needed to ensure background color fills full width
const CTASubWrapper = {
  maxWidth: 1200,
  margin: 'auto',
};

const h1 = {
  fontSize: 40,
  color: '#fff',
};

const subTextWrapper = {
  margin: '30px auto 50px',
};

const subText = {
  fontSize: 24,
  maxWidth: 600,
  margin: '0 auto 10px',
  color: '#fff',
};

const CTAInput = {
  border: '2px solid #1c1d1c',
  padding: '10px 20px',
  fontSize: 18,
  borderTopLeftRadius: 5,
  borderBottomLeftRadius: 5,
  fontFamily: 'Source Sans Pro, sans-serif',
  width: 250,
};

const CTAButton = {
  padding: '10px 20px',
  border: '2px solid #1c1d1c',
  borderTopRightRadius: 5,
  borderBottomRightRadius: 5,
  background: '#1c1d1c',
  color: '#fff',
  fontSize: '18px',
  cursor: 'pointer',
  maxWidth: 100,
  display: 'inline',
  // boxShadow: '5px 5px 5px 0px rgb(13, 84, 0)',
};

const subButtonText = {
  fontSize: 16,
  color: '#fff',
};

const image = {
  marginTop: 50,
};

const subPointerText = {
  fontSize: 20,
  color: '#fff',
  display: 'inline',
  position: 'relative',
  bottom: 50,
  marginLeft: 30,
};

export default function Header() {
  return (
    <div style={CTAWrapper} className='CTAWrapper'>
      <div style={CTASubWrapper}>
        <h1 style={h1}>Get started now for FREE!</h1>
        <div style={subTextWrapper}>
          <p style={subText} className='CTASubText'>
            {/* Start improving your speed with our free "Master The Basics" course. It's simple, */}
            Get fast now with our free "Master The Basics" course.
          </p>
          <p style={subText} className='CTASubText'>
            It's simple, effective, and FREE!
          </p>
        </div>
        <input
          className='CTAInput'
          style={CTAInput}
          type='text'
          placeholder='Enter your email'
        ></input>
        <div style={CTAButton} className='CTAButton'>
          Let's do this!
        </div>
        <p style={subButtonText}>(The only thing you've got to lose is potential!)</p>
        <img src={point} style={image} height='120' />
        <p style={subPointerText}>Umm... what are you waiting for!</p>
      </div>
    </div>
  );
}
