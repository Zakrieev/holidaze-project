import React from 'react'
import Cards from '../layout/Cards';
import HeroSection from '../layout/HeroSection';
import Footer from '../layout/Footer';
import Featured from '../layout/Featured';
import "../../sass/style.scss";


function Home({setFavNum}) {
    return (
      <>
      <HeroSection />
      <Cards />
      <Featured setFavNum={setFavNum}/>
      <Footer />
      </>
    );
  }
  
  export default Home;