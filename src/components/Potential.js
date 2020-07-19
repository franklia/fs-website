import React from 'react';
import CTAFrankImg from '../images/CTAFrank.png';
import cubes from '../images/cubes.png';
import desktop from '../images/desktop2.png';
import trophy from '../images/trophy.png';

const potentialWrapper = {
  padding: '50px 50px 0',
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
  // flexFlow: 'row wrap',
  flexWrap: 'wrap',
  justifyContent: 'center',
  // padding: 0,
};

// Sub content aside
const aside = {
  width: 400,
};

// const mainImage = {
// };

const CTAFrank = {
  height: 250,
  padding: '50px 30px 50px 70px',
};

const potentialMainTextWrapper = {
  padding: 50,
  maxWidth: 480,
  // flexGrow: 1,
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

const h2 = {
  fontSize: 22,
  margin: '0 0 10px',
  color: '#37a000',
};

const subContentText = {
  maxWidth: 290,
  margin: '30px auto 50px',
  fontSize: 18,
};

const subContentSubHeading = {
  margin: '10px 0 30px',
};

export default function Header() {
  return (
    <div style={potentialWrapper} className='potentialWrapper'>
      <h1 style={h1}>Reach your potential with Football Speedster</h1>
      <div style={mainContent}>
        <img
          src={CTAFrankImg}
          style={CTAFrank}
          className='CTAFrank'
          alt='Frank with offer gesture'
        />
        <aside style={potentialMainTextWrapper} className='potentialMainTextWrapper'>
          <p style={subText}>
            We provide an effective online speed training program specifically tailored to junior
            football players (suitable for ages 8 - 15, in any football code).
          </p>
          <p style={subText}>
            Get started with our free course to master the fundamentals of running technique. Then
            move on to more advanced training drills. We will guide you every step of the way.
          </p>
        </aside>
      </div>
      <div style={subContent}>
        <aside style={aside}>
          <h2 style={h2}>Master The Basics</h2>
          <p style={subContentSubHeading}>(Free Course!)</p>
          <img src={cubes} alt='Frank with offer gesture' height='90' />
          <p style={subContentText}>
            Learn sprint technique fundamentals such as body alignment, correct knee position and
            leg drive, foot placement, arm action and more.
          </p>
        </aside>

        <aside style={aside}>
          <h2 style={h2}>Professional Video Analysis</h2>
          <p style={subContentSubHeading}>(Coming Soon)</p>
          <img src={desktop} alt='Frank with offer gesture' height='90' />
          <p style={subContentText}>
            Submit a video of your running technique to get professional analysis and specific
            training drills to fast-track your progress.
          </p>
        </aside>

        <aside style={aside}>
          <h2 style={h2}>Train To Win</h2>
          <p style={subContentSubHeading}>(Pro Speed Training)</p>
          <img src={trophy} alt='Frank with offer gesture' height='90' />
          <p style={subContentText}>
            When you've mastered the basics we will show you advanced drills to cover team sport
            specific movements patterns and maximise speed gains.
          </p>
        </aside>
      </div>
    </div>
  );
}
