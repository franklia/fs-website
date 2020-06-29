import React from 'react';
// import falsePic from '../images/false.png';

// styles
const wrapperColor = {
  paddingTop: 30,
  // background: 'rgb(29,112,16)',
  // background: 'radial-gradient(circle, rgba(29,112,16,1) 69%, rgba(11,83,0,1) 100%)',
  background: 'rgb(36,36,36)',
  background: 'radial-gradient(circle, rgba(36,36,36,1) 68%, rgba(0,0,0,1) 100%)',
  borderBottom: '5px solid #93ca89',
  borderTop: '5px solid #93ca89',
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
  marginTop: 100,
  justifyContent: 'space-evenly',
};

const aside = {
  width: 350,
};

const outer = {
  background: '#1D7010',
  borderRadius: '50%',
  height: 100,
  width: 100,
  position: 'relative',
  border: '2px solid #FFF',
  zIndex: 5,
  left: 20,
  bottom: 30,
};

const inner = {
  background: '#1D7010',
  borderRadius: '50%',
  height: 90,
  width: 90,
  border: '2px dotted #FFF',
  fontSize: 25,
  color: '#fff',
  position: 'relative',
  top: 3,
  left: 3,
};

const mythBadge = {
  fontSize: 20,
  padding: 10,
  color: '#FFF',
  fontWeight: 800,
};

const mythTitle = {
  fontSize: 25,
  padding: '20px 20px 20px 40px',
  backgroundColor: '#1D7010',
  color: '#fff',
  border: '2px solid #eee',
  display: 'inline-block',
  position: 'relative',
  left: 30,
  bottom: 70,
  fontWeight: 600,
  maxWidth: 200,
  borderRadius: 5,
};

const busted = {
  transform: 'rotate(-15deg)',
  fontSize: 30,
  display: 'inline-block',
  position: 'relative',
  bottom: 80,
  left: 130,
  webkitTextStroke: '2px #1D7010',
  background: '#fff',
  padding: '0 10px',
  borderRadius: 10,
  border: '3px solid #6db94e',
};

const factWord = {
  fontSize: 25,
  fontWeight: 700,
};

const factText = {
  maxWidth: 280,
  marginLeft: 70,
  color: '#fff',
  position: 'relative',
  bottom: 60,
  fontSize: 20,
};

export default function Myths() {
  return (
    <div style={wrapperColor}>
      <div style={content}>
        <h1 style={h1}>Speed Myths - Busted!</h1>
        <div style={mainContent}>
          <aside style={aside}>
            <div style={outer}>
              <div style={inner}>
                <div style={mythBadge}>
                  Myth <span style={{ fontSize: 35 }}>#1</span>
                </div>
              </div>
            </div>
            <div style={mythTitle}>You're either born fast or slow</div>
            <div style={busted}>BUSTED!</div>
            <p style={factText}>
              <span style={factWord}>FACT: </span> Speed, just like fitness, is highly trainable,
              and there is more information about this further down the page. The problem is that
              most football coaches don't know how to improve running speed.
            </p>
          </aside>

          <aside style={aside}>
            <div style={outer}>
              <div style={inner}>
                <div style={mythBadge}>
                  Myth <span style={{ fontSize: 35 }}>#2</span>
                </div>
              </div>
            </div>
            <div style={mythTitle}>Sprint technique drills don't transfer to the game</div>
            <div style={busted}>BUSTED!</div>
            <p style={factText}>
              <span style={factWord}>FACT: </span>
              If this were true, then kicking practice would also be a waste of time. The truth is
              that with the right coaching, any skill can be learned and used in a game situation.
            </p>
          </aside>

          <aside style={aside}>
            <div style={outer}>
              <div style={inner}>
                <div style={mythBadge}>
                  Myth <span style={{ fontSize: 35 }}>#3</span>
                </div>
              </div>
            </div>
            <div style={mythTitle}>You can't run fast if you have flat feet</div>
            <div style={busted}>BUSTED!</div>
            <p style={factText}>
              <span style={factWord}>FACT: </span>The "spring" in your step is not dependent on arch
              shape. Over-pronation (rolling the foot too far inward) due to weak muscles can have
              injury implications, but this is a different issue.
            </p>
          </aside>
        </div>
      </div>
    </div>
  );
}
