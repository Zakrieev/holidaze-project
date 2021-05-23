import React, {useState, useEffect} from 'react';
import { BASE_URL } from '../../constants/api';
import "../../sass/style.scss";
import { useLocation } from 'react-router-dom';
import Footer from "../layout/Footer";
import HotelCard from '../layout/HotelCard';

export default function Accommodations({setFavNum}) {
  const [allAccommodations, setAllAccommodations] = useState(null);
  const [accommodations, setAccommodations] = useState(null);
  const location = useLocation();
  const [searchString, setSearchString] = useState(new URLSearchParams(location.search).get("search") || "");
  const [filter, setFilter] = useState(new URLSearchParams(location.search).get("filter") || 'all');
  useEffect(() => {
    if(!allAccommodations) {
      fetch(BASE_URL + 'accommodations').then(response => response.json())
      .then((data) => {
        setAllAccommodations(data);
        setAccommodations(data);
      });
    }
    if(searchString.length > 0 || filter !== 'all') {
      setAccommodations(allAccommodations
        ?.filter(item => searchString.length > 0 ? item.Name.toLowerCase().includes(searchString.toLowerCase()) : true)
        ?.filter(item => filter !== 'all' ? item.Type === filter : true)
      );
    }
    if(filter === 'all') {
      setAccommodations(allAccommodations?.filter(item => searchString.length > 0 ? item.Name.toLowerCase().includes(searchString.toLowerCase()) : true));
    }

  }, [searchString, filter, allAccommodations])
  

  return (
  <div>
    <div className="accommodations-banner">
      <h1>Book Accommodations In Bergen</h1>
    </div>
    <div className="accommodations-search">
      <input type="text" placeholder="Search" onChange={(e) => setSearchString(e.target.value)} />
      <select defaultValue={new URLSearchParams(location.search).get("filter")} onChange={(e) => setFilter(e.target.value)} >
        <option value="all">All</option>
        <option value="Hotel">Hotels</option>
        <option value="B and B">Bed and Breakfast</option>
        <option value="Guesthouse">Guesthouse</option>
      </select>
    </div>
  <div className="cards-container">
    {accommodations && accommodations.map((item) => <HotelCard setFavNum={setFavNum} key={item.id} item={item} />)}
  </div>
  <Footer />
  </div>
  
  );
}

