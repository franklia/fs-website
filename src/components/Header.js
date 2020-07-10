import React from 'react';
import frank from '../images/frank-1.png';
import logo from '../images/logo.png';

const headerWrapper = {
  background: 'radial-gradient(circle, rgba(29,112,16,1) 69%, rgba(11,83,0,1) 100%)',
  borderTop: '5px solid #93ca89',
  borderBottom: '5px solid #93ca89',
  padding: 50,
};

const content = {
  maxWidth: 1200,
  margin: 'auto',
};

const headerLogo = {};

const headerButton = {
  marginTop: 10,
  padding: '10px 40px',
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
  // marginTop: '1em',
  alignItems: 'center',
  justifyContent: 'center',
};

const textWrap = {
  padding: 30,
  maxWidth: 400,
  flexGrow: 1,
};

const h1 = {
  fontSize: 40,
  // color: '#f0ffee',
  color: '#fff',
};

const subText = {
  fontSize: 20,
  // color: '#d9f7d5',
  color: '#fff',
};

// const mainImage = {};

const headerFrank = {
  padding: '10px 60px',
};

export default function Header() {
  const scrollToId = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div style={headerWrapper} className='headerWrapper'>
      <div style={content}>
        <img
          src={logo}
          style={headerLogo}
          className='headerLogo'
          height='60'
          alt='Football Speedster logo including pic of man running'
        />
        <div className='headerButton' style={headerButton} onClick={() => scrollToId('CTA')}>
          Get Started
        </div>
        <div style={mainContent}>
          <aside style={textWrap} className='headerAside'>
            {/* <h1 style={h1}>Worried you&#39;ll never be fast enough?</h1> */}
            <h1 style={h1}>Need to improve your running speed?</h1>
            <p style={subText}>
              Football Speedster can improve your sprint technique and take your game to the next
              level!
            </p>
          </aside>
          <aside className='headerAside'>
            <img style={headerFrank} src={frank} alt='Frank' className='headerFrank' />
          </aside>
        </div>
      </div>
    </div>
  );
}
