import React, { useEffect, useState } from 'react'
import Footer from '../layout/Footer';
import HotelCard from '../layout/HotelCard';

function Favourites({setFavNum}) {
    const [favourites, setFavourites] = useState(null);
    useEffect(() => {
        setFavourites(JSON.parse(localStorage.getItem('favourites')));
    }, []);
    if(!favourites || favourites.length === 0) return <div className='favourite-container'>
    <h1>THE FAVOURITES PAGE IS EMPTY!</h1>
  </div>; 
    
    return (
        <>
        <div className="cards-container">
        {favourites.map(fav => <HotelCard setFavNum={setFavNum} key={fav?.id} item={fav} />)}
        </div>
  <Footer />
  </>
    )
}

export default Favourites
