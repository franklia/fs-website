import React from 'react';
import CTAFrankImg from '../images/CTAFrank.png';
import cubes from '../images/cubes.png';
import desktop from '../images/desktop2.png';
import trophy from '../images/trophy.png';

// styles
const potentialWrapper = {
  padding: 50,
  textAlign: 'center',
  maxWidth: 1200,
  margin: 'auto',
};

const h1 = {
  fontSize: 40,
  color: '#37a000',
  margin: 0,
};

const mainContent = {
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'center',
};

const aside = {
  width: 400,
};

const mainImage = {
  // maxWidth: 200,
  // padding: 50,
};

const CTAFrank = {
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
  // color: '#d9f7d5',
};

const subContent = {
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'space-evenly',
  // color: '#fff',
};

const h3 = {
  fontSize: 22,
  margin: '0 0 10px',
  color: '#37a000',
};

export default function Header() {
  return (
    <div style={potentialWrapper} className='potentialWrapper'>
      <h1 style={h1}>Reach your potential with Football Speedster</h1>
      <div style={mainContent}>
        {/* <aside style={mainImage}> */}
        <img src={CTAFrankImg} style={CTAFrank} alt='Frank with offer gesture' />
        {/* </aside> */}
        <aside style={textWrap}>
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
          <img src={cubes} alt='Frank with offer gesture' height='90' />
        </aside>

        <aside style={aside}>
          <h3 style={h3}>Professional Video Analysis</h3>
          <p>(Coming Soon)</p>
          <img src={desktop} alt='Frank with offer gesture' height='90' />
        </aside>

        <aside style={aside}>
          <h3 style={h3}>Train To Win</h3>
          <p>(Pro Speed Training)</p>
          <img src={trophy} alt='Frank with offer gesture' height='90' />
        </aside>
      </div>
    </div>
  );
}
