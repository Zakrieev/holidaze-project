import React, {useState, useEffect} from 'react'
import { BASE_URL } from '../../constants/api';
import "../../sass/style.scss";
import HotelCard from './HotelCard';


function Featured({setFavNum}) {
  const [featured, setFeatured] = useState(null)
  useEffect(() => {
    console.log();
      fetch(BASE_URL + 'accommodations').then(response => response.json())
      .then((data) => setFeatured(data.filter(item => item.Featured)));
  }, [])
    return (
        <div className='cards'>
        <h1 className="header-featured">Most Popular Accommodations</h1>
        <div className='cards-container'>
              {featured && featured.map((item) => (<HotelCard setFavNum={setFavNum} key={item.id} item={item} />))}
      </div>
    </div>
    )
}

export default Featured;
