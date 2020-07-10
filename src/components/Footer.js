import React from 'react';

const wrapperColor = {
  background: 'radial-gradient(circle, rgba(36,36,36,1) 68%, rgba(0,0,0,1) 100%)',
};

const text = {
  color: '#FFF',
  margin: 0,
  padding: 20,
  textAlign: 'right',
  fontSize: 20,
};

export default function Footer() {
  return (
    <div style={wrapperColor}>
      {/* <div>
        Icons made by{' '}
        <a href='https://www.flaticon.com/authors/pixel-perfect' title='Pixel perfect'>
          Pixel perfect
        </a>{' '}
        from{' '}
        <a href='https://www.flaticon.com/' title='Flaticon'>
          www.flaticon.com
        </a>
      </div> */}
      <p style={text}>&copy; 2020 Football Speedster</p>
    </div>
  );
}
