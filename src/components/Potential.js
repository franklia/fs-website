import React from 'react';
import CTAFrankImg from '../images/CTAFrank.png';
import cubes from '../images/cubes.png';
import desktop from '../images/desktop2.png';
import trophy from '../images/trophy.png';

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

// const mainImage = {
// };

const CTAFrank = {
  maxWidth: 200,
  padding: 50,
};

const textWrap = {
  padding: 50,
  maxWidth: 500,
  flexGrow: 1,
};

const subText = {
  fontSize: 20,
  textAlign: 'left',
  lineHeight: 1.6,
  // color: '#d9f7d5',
};

const subContent = {
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'space-evenly',
  // color: '#fff',
};

const subContentText = {
  maxWidth: 250,
  margin: '20px auto 0',
  fontSize: 18,
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
        <img src={CTAFrankImg} style={CTAFrank} alt='Frank with offer gesture' />
        <aside style={textWrap}>
          <p style={subText}>
            We provide a simple and effective online speed training program specifically tailored to
            junior football players (suitable for ages 8 - 15, in any football code).
          </p>
          <p style={subText}>
            Get started with our free course to master the fundamentals of running technique. We
            will guide you the whole way.
          </p>
        </aside>
      </div>
      <div style={subContent}>
        <aside style={aside}>
          <h3 style={h3}>Master The Basics</h3>
          <p>(Free Course!)</p>
          <img src={cubes} alt='Frank with offer gesture' height='90' />
          <p style={subContentText}>
            Learn how to align your body correctly, in order to feel the right position for speed.
          </p>
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
