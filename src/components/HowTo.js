import React from 'react';
import runner from '../images/technique-runner.png';
// import calendar from '../images/calendar.png';
import rocket from '../images/rocket.png';

// styles
const howToWrapper = {
  padding: 50,
  // background: 'rgb(29,112,16)',
  // background: 'radial-gradient(circle, rgba(29,112,16,1) 69%, rgba(11,83,0,1) 100%)',
  // grey
  // background: 'radial-gradient(circle, rgba(231,231,231,1) 68%, rgba(195,194,194,1) 100%)',

  // lighter grey radial gradient
  // background: 'radial-gradient(circle, rgb(243, 243, 243) 68%, rgb(195, 194, 194) 100%)',

  // light grey flat
  background: '#f3f3f3',
  // borderBottom: '5px solid #93ca89',

  // light green
  // background: '#edffef',
  // borderBottom: '5px solid #93ca89',

  textAlign: 'center',
};

const howToContent = {
  maxWidth: 1200,
  margin: 'auto',
};

const h1 = {
  fontSize: 40,
  color: '#37a000',
  margin: 0,
};

const subContent = {
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'space-evenly',
};

const aside = {
  margin: '0 20px',
};

const image = {
  marginTop: 50,
};

const subTitle = {
  fontSize: 25,
  padding: '40px 0 0',
  // backgroundColor: '#1D7010',
  color: '#37a000',
  fontWeight: 600,
};

const subText = {
  maxWidth: 350,
  margin: 'auto',
  paddingTop: 30,
  // color: '#fff',
  fontSize: 20,
};

export default function HowTo() {
  return (
    <div style={howToWrapper} className='howToWrapper'>
      <div style={howToContent} className='howToContent'>
        <h1 style={h1}>There are 2 ways to get fast!</h1>
        <div style={subContent}>
          <aside style={aside}>
            <img src={runner} style={image} alt='Frank with offer gesture' height='130' />
            <div style={subTitle}>Improve Your Technique</div>
            <p style={subText}>
              Speed, just like fitness, is highly trainable. The problem is that most coaches don't
              know how to improve running speed.
            </p>
          </aside>

          <aside style={aside}>
            <img src={rocket} style={image} alt='Frank with offer gesture' height='130' />
            <div style={subTitle}>Train Fast Regularly</div>
            <p style={subText}>
              Speed, just like fitness, is highly trainable. The problem is that most coaches don't
              know how to improve running speed.
            </p>
          </aside>
        </div>
      </div>
    </div>
  );
}
