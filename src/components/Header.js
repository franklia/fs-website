import React from 'react';
import frank from '../images/frank-1.png';

// styles
const headerWrapper = {
  padding: 50,
  backgroundColor: '#eee',
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
  background: '#bdbcbc',
  color: '#fff',
  fontSize: '14px',
  cursor: 'pointer',
  maxWidth: 100,
  display: 'inline',
  float: 'right',
};

const mainContent = {
  display: 'flex',
  flexFlow: 'row wrap',
  marginTop: 100,
  alignItems: 'center',
  justifyContent: 'center',
};

const textWrap = {
  padding: 50,
  maxWidth: 400,
};

const h1 = {
  fontSize: 40,
};

const subText = {
  fontSize: 20,
};

const mainImage = {
  maxWidth: 200,
  padding: 50,
};

export default function Header() {
  return (
    <div style={headerWrapper}>
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
