import React from 'react';
import frank from '../images/frank-1.png';

const wrapperColor = {
  // padding: 50,
  // backgroundColor: '#eee',
  // background: 'rgb(100,170,89)',
  // background: 'radial-gradient(circle, rgba(100,170,89,1) 0%, rgba(11,83,0,1) 100%)',
  // background: 'rgb(22,129,5)',
  // background: 'radial-gradient(circle, rgba(22,129,5,1) 83%, rgba(11,83,0,1) 100%)',
  // background: 'rgb(38,143,22)',
  // background: 'radial-gradient(circle, rgba(38,143,22,1) 69%, rgba(31,112,19,1) 100%)',
  background: 'rgb(29,112,16)',
  background: 'radial-gradient(circle, rgba(29,112,16,1) 69%, rgba(11,83,0,1) 100%)',
  borderTop: '5px solid #93ca89',
  borderBottom: '5px solid #93ca89',
};

const content = {
  maxWidth: 1200,
  margin: 'auto',
};

const logo = {
  maxWidth: 100,
  display: 'inline',
};

const button = {
  padding: '10px 20px',
  border: 'none',
  borderRadius: '4px',
  background: '#4c9441',
  color: '#fff',
  fontSize: '18px',
  cursor: 'pointer',
  maxWidth: 100,
  display: 'inline',
  float: 'right',
  boxShadow: '5px 5px 5px 0px rgb(13, 84, 0)',
};

const mainContent = {
  display: 'flex',
  flexFlow: 'row wrap',
  marginTop: '1em',
  alignItems: 'center',
  justifyContent: 'center',
};

const textWrap = {
  padding: 50,
  maxWidth: 400,
  flexGrow: 1,
};

const h1 = {
  fontSize: 40,
  color: '#f0ffee',
};

const subText = {
  fontSize: 20,
  color: '#d9f7d5',
};

const mainImage = {
  maxWidth: 200,
  padding: 50,
};

export default function Header() {
  return (
    <div style={wrapperColor} className='wrapper'>
      <div style={content}>
        <p style={logo}>LOGO</p>
        <div style={button}>Get Started</div>
        <div style={mainContent}>
          <aside style={textWrap}>
            <h1 style={h1}>Worried you&#39;ll never be fast enough?</h1>
            <p style={subText}>
              Football Speedster can improve your sprint technique and take your game to the next
              level!
            </p>
          </aside>
          <aside style={mainImage}>
            <img src={frank} alt='Frank' />
          </aside>
        </div>
      </div>
    </div>
  );
}
