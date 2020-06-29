import React from 'react';
import stop from '../images/stop.png';

// styles
const wrapperWhite = {
  padding: 30,
  textAlign: 'center',
  // background: '#f8fff7',
};

const content = {
  maxWidth: 1200,
  margin: 'auto',
};

const subHeadP1 = {
  padding: 20,
  fontSize: 24,
};

const subHeadP2 = {
  fontSize: 30,
  fontStyle: 'italic',
  fontWeight: 600,
};

const subHeadP3 = {
  fontSize: 24,
};

export default function Header() {
  return (
    <div style={wrapperWhite}>
      <div style={content}>
        <p style={subHeadP1}>Has anyone ever said this to you before...</p>
        <p style={subHeadP2}>"It's no use... you're either born fast or slow."</p>
        <img src={stop} style={{ width: 300 }} alt='Frank with stop sign' />
        <p style={subHeadP1}>
          Don't believe this - its{' '}
          <span style={{ color: '#e40a0a', fontSize: 25, fontWeight: 700 }}>NOT</span> true!
        </p>
        <p style={subHeadP3}>Read on to find out more...</p>
      </div>
    </div>
  );
}
