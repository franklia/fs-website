import React from 'react';
import frankOffer from '../images/frank-offer.png';
import blocks from '../images/blocks.png';

import cup from '../images/cup.png';

// styles
const wrapperColor = {
  padding: 50,
  background: 'rgb(29,112,16)',
  background: 'radial-gradient(circle, rgba(29,112,16,1) 69%, rgba(11,83,0,1) 100%)',
  borderBottom: '5px solid #93ca89',
  textAlign: 'center',
};

const content = {
  maxWidth: 1200,
  margin: 'auto',
};

const h1 = {
  fontSize: 40,
  color: '#FFF',
};

const mainContent = {
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'center',
};

const aside = {
  // display: 'flex',
  // alignContent: 'center',
  // display: 'table',
};

const mainImage = {
  maxWidth: 200,
  padding: 50,
};

const textWrap = {
  padding: 50,
  maxWidth: 400,
  flexGrow: 1,
};

const subText = {
  fontSize: 20,
  color: '#d9f7d5',
};

const subContent = {
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'space-evenly',
  // color: '#fff',
};

const h3 = {
  fontSize: 22,
  marginBottom: 10,
};

export default function Header() {
  return (
    <div style={wrapperColor}>
      <div style={content}>
        <h1 style={h1}>Reach your potential with Football Speedster</h1>
        <div style={mainContent}>
          <aside style={mainImage}>
            <img src={frankOffer} alt='Frank with offer gesture' />
          </aside>
          <aside style={textWrap}>
            {/* <h1 style={h1}>Worried you&#39;ll never be fast enough?</h1> */}
            <p style={subText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore.
            </p>
          </aside>
        </div>
        <div style={subContent}>
          <aside style={aside}>
            <h3 style={h3}>Master The Basics</h3>
            <p>(Free Course!)</p>
            <img src={blocks} alt='Frank with offer gesture' />
          </aside>

          <aside style={aside}>
            <h3 style={h3}>Professional Video Analysis</h3>
            <p>(Coming Soon)</p>
          </aside>

          <aside style={aside}>
            <h3 style={h3}>Train To Win</h3>
            <p>(Pro Speed Training)</p>
            <img src={cup} alt='Frank with offer gesture' />
          </aside>
        </div>
      </div>
    </div>
  );
}
