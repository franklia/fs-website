import React from 'react';
// import falsePic from '../images/false.png';

// styles
const wrapperColor = {
  padding: 50,
  // grey
  // background: 'rgb(231,231,231)',
  // background: 'radial-gradient(circle, rgba(231,231,231,1) 68%, rgba(195,194,194,1) 100%)',
  borderBottom: '5px solid #93ca89',
  textAlign: 'center',
};

const content = {
  maxWidth: 1200,
  margin: 'auto',
};

const h1 = {
  fontSize: 40,
  // color: '#FFF',
};

const mainContent = {
  display: 'flex',
  flexFlow: 'row wrap',
  marginTop: 100,
  justifyContent: 'space-evenly',
};

const aside = {
  // display: 'flex',
  // alignContent: 'center',
  // display: 'table',
};

const table = {
  display: 'table',
  height: 100,
  overflow: 'hidden',
  borderRadius: '50%',
  width: 100,
  margin: 10,
  border: '2px solid #FFF',
  outlineOffset: -5,
  backgroundColor: '#0B5300',
};

const tableCell = { display: 'table-cell', verticalAlign: 'middle' };

const mythBadge = {
  fontSize: 20,
  padding: 10,
  color: '#FFF',
  fontWeight: 800,
};

const mythTitle = {
  fontSize: 25,
  padding: 20,
  backgroundColor: '#1D7010',
  color: '#fff',
  // borderBottom: '1px solid #eee',
};

const pic = {
  maxWidth: '70%',
  margin: '30px 0',
};

const busted = {
  maxWidth: 200,
  margin: 'auto',
  color: '#fff',
};

const outer = {
  background: '#1D7010',
  borderRadius: '50%',
  height: 120,
  width: 120,
  position: 'relative',
};

const inner = {
  background: '#1D7010',
  borderRadius: '50%',
  height: 100,
  width: 100,
  border: '2px dashed #FFF',
  fontSize: 25,
  color: '#fff',
  position: 'absolute',
  top: 8,
  left: 8,
};

const mythTitle2 = {
  fontSize: 25,
  padding: 20,
  backgroundColor: '#1D7010',
  color: '#fff',
};

export default function HowTo() {
  return (
    <div style={wrapperColor}>
      <div style={content}>
        <h1 style={h1}>There are 2 ways to get fast!</h1>
        <div style={mainContent}>
          <aside style={aside}>
            {/* <div style={table}>
              <div style={tableCell}>
                <div style={mythBadge}>
                  Myth <br />
                  <span style={{ fontSize: 50 }}>1</span>
                </div>
              </div>
            </div> */}
            <div style={mythTitle}>Improve Technique</div>
            <p style={busted}>
              <span style={{ fontSize: 20, fontWeight: 700, color: 'green' }}>FACT: </span> Speed,
              just like fitness, is highly trainable. The problem is that most coaches don't know
              how to improve running speed.
            </p>
          </aside>

          <aside style={aside}>
            {/* <div style={outer}>
              <div style={table}>
                <div style={inner}>
                  <div style={mythBadge}>Myth #1</div>
                </div>
              </div>
            </div> */}
            <div style={mythTitle}>Train Fast</div>
            <p style={busted}>
              <span style={{ fontSize: 20, fontWeight: 700, color: 'green' }}>FACT: </span> Speed,
              just like fitness, is highly trainable. The problem is that most coaches don't know
              how to improve running speed.
            </p>
          </aside>
        </div>
      </div>
    </div>
  );
}
