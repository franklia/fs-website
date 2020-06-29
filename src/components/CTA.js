import React from 'react';

// styles
const wrapperColor = {
  padding: 30,
  // background: 'rgb(231,231,231)',
  // background: 'radial-gradient(circle, rgba(231,231,231,1) 68%, rgba(195,194,194,1) 100%)',
  borderBottom: '5px solid #93ca89',
  textAlign: 'center',
};

const content = {
  maxWidth: 1200,
  margin: 'auto',
};

const h1 = {
  fontSize: 40,
};

const subText = {
  fontSize: 24,
  maxWidth: 600,
  margin: '30px auto 40px',
};

const email = {
  border: '2px solid #4c9441',
  padding: '10px 20px',
  fontSize: 18,
  borderTopLeftRadius: 5,
  borderBottomLeftRadius: 5,
  fontFamily: 'Source Sans Pro, sans-serif',
  width: 250,
};

const button = {
  padding: '10px 20px',
  border: '2px solid #4c9441',
  borderTopRightRadius: 5,
  borderBottomRightRadius: 5,
  background: '#4c9441',
  color: '#fff',
  fontSize: '18px',
  cursor: 'pointer',
  maxWidth: 100,
  display: 'inline',
  // boxShadow: '5px 5px 5px 0px rgb(13, 84, 0)',
};

const subButtonText = {
  fontSize: 14,
};

export default function Header() {
  return (
    <div style={wrapperColor}>
      <div style={content}>
        <h1 style={h1}>Get started now for FREE!</h1>
        <p style={subText}>
          Start improving your speed with our free "Master The Basics" course. It's simple,
          effective, and FREE!
        </p>
        <input
          className='ctaInput'
          style={email}
          type='text'
          placeholder='Enter your email'
        ></input>
        <div style={button}>Let's do this!</div>
        <p style={subButtonText}>(The only thing you've got to lose is potential!)</p>
      </div>
    </div>
  );
}
