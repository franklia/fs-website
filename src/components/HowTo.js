import React from 'react';
import runner from '../images/runner.png';
import rocket from '../images/rocket.png';

// styles
const wrapperColor = {
  padding: 50,
  // background: 'rgb(29,112,16)',
  // background: 'radial-gradient(circle, rgba(29,112,16,1) 69%, rgba(11,83,0,1) 100%)',
  // grey
  // background: 'radial-gradient(circle, rgba(231,231,231,1) 68%, rgba(195,194,194,1) 100%)',
  // lighter grey
  background: 'radial-gradient(circle, rgb(243, 243, 243) 68%, rgb(195, 194, 194) 100%)',
  // borderBottom: '5px solid #93ca89',
  textAlign: 'center',
};

const content = {
  maxWidth: 1200,
  margin: 'auto',
};

const h1 = {
  fontSize: 40,
  color: '#4e4e4e',
};

const mainContent = {
  display: 'flex',
  flexFlow: 'row wrap',
  // marginTop: 100,
  justifyContent: 'space-evenly',
};

const aside = {
  // display: 'flex',
  // alignContent: 'center',
  // display: 'table',
};

const image = {
  marginTop: 50,
};

const subTitle = {
  fontSize: 25,
  padding: '40px 0 0',
  // backgroundColor: '#1D7010',
  color: '#4e4e4e',
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
    <div style={wrapperColor}>
      <div style={content}>
        <h1 style={h1}>There are 2 ways to get fast!</h1>
        <div style={mainContent}>
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
