import React from 'react';
import "../../sass/style.scss";
import Search from '../layout/Search';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>Find A Place To Stay</h1>
      <p>Hotels, Guesthouses and B and B's in Bergen</p>
      <Search />
    </div>
  );
}

export default HeroSection;
