import React, { useState } from 'react';
import Header from '../componets/Header';
import Banner from '../componets/Banner';
import Footer from '../componets/Footer';
// import Cartstore from '../componets/Cartstore';
import { Gents, Ladies } from '../data';
import Collections from '../componets/Collections';
import WomenCollection from '../componets/WomenCollection';

const Mainpage = () => {
  const [gentsFashion, setGentsFashion] = useState(Gents);
  const [ladiesFashion, setLadiesFashion] = useState(Ladies);
  return (
    <div className="MainContainer">
      <Header />
      <Banner />
      <Collections gentsFashion={gentsFashion} />
      <WomenCollection ladiesFashion={ladiesFashion} />
      <Footer />
    </div>
  );
};

export default Mainpage;
