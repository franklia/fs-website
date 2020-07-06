import React from 'react';
import frank from '../images/frank-1.png';
import logo from '../images/fs_logo4.png';

const wrapper = {
  background: 'radial-gradient(circle, rgba(29,112,16,1) 69%, rgba(11,83,0,1) 100%)',
  borderTop: '5px solid #93ca89',
  borderBottom: '5px solid #93ca89',
  padding: 50,
};

const content = {
  maxWidth: 1200,
  margin: 'auto',
};

// const logo = {
//   maxWidth: 100,
//   display: 'inline',
//   color: '#fff',
// };

const runner = {
  paddingLeft: 100,
};

const footballText = {
  color: '#fff',
  fontSize: 22,
  display: 'inline',
  position: 'relative',
  bottom: 21,
  right: 135,
  fontWeight: 600,
  // color: '#e5fbce',
  color: '#daffd8',
};

const speedsterText = {
  color: '#fff',
  fontSize: 22,
  display: 'inline',
  position: 'relative',
  right: 66,
  bottom: 21,
  fontWeight: 600,
  // color: '#e5fbce',
  // color: '#c0fbbc',
  color: '#daffd8',
};

const headerButton = {
  marginTop: 10,
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
  // marginTop: '1em',
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
  // color: '#f0ffee',
  color: '#fff',
};

const subText = {
  fontSize: 20,
  // color: '#d9f7d5',
  color: '#fff',
};

const mainImage = {
  maxWidth: 200,
  padding: 50,
};

export default function Header() {
  return (
    <div style={wrapper} className='wrapper'>
      <div style={content}>
        <img src={logo} style={runner} height='60' />
        {/* <p style={footballText}>Football</p>
        <p style={speedsterText}>Speedster</p> */}
        <div className='headerButton' style={headerButton}>
          Get Started
        </div>
        <div style={mainContent}>
          {/* Aside displayed at min-width 961px */}
          <aside style={mainImage} className='headerAside headerFrank1'>
            <img src={frank} alt='Frank' className='headerFrank1' />
          </aside>
          {/* Aside displayed at all widths */}
          <aside style={textWrap} className='headerAside'>
            <h1 style={h1}>Worried you&#39;ll never be fast enough?</h1>
            <p style={subText}>
              Football Speedster can improve your sprint technique and take your game to the next
              level!
            </p>
          </aside>
          {/* Aside displayed at max-width 960px */}
          <aside style={mainImage} className='headerAside headerFrank2'>
            <img src={frank} alt='Frank' className='headerFrank2' />
          </aside>
        </div>
      </div>
    </div>
  );
}
