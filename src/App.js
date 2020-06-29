import React from 'react';
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import Myths from './components/Myths';
import HowTo from './components/HowTo';
import Potential from './components/Potential';
import CTA from './components/CTA';
import Footer from './components/Footer';

const content = {
  maxWidth: 1200,
  margin: 'auto',
};

function App() {
  return (
    <div>
      <Header />
      <SubHeader />
      <Myths />
      <HowTo />
      <Potential />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
