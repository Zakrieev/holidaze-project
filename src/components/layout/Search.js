import React, {useState, useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom';
import { BASE_URL } from '../../constants/api';

const SearchBar = () => {
    const [accommodations, setAccommodations] = useState(null);
    const history = useHistory();
    const [searchString, setSearchString] = useState("");
    useEffect(() => {
        fetch(BASE_URL + 'accommodations').then(response => response.json())
        .then((data) => setAccommodations(data.filter((item) => item.Name.toLowerCase().includes(searchString.toLowerCase()))));
    }, [searchString])
    const search = (e) => {
        e.preventDefault();
        history.push('/accommodations?search='+searchString);
    }
    return (<>
    <form className="search-form" onSubmit={search}>
        <label htmlFor="header-search">
            <span className="visually-hidden">Search for Accommodations</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search for Accommodations"
            autoComplete="off"
            onChange={(e) => setSearchString(e.target.value)}
            name="s" 
        />
        <button className="header-search" type="submit">Search</button>
    </form>
    {accommodations && searchString.length > 0 && <ul className="auto-suggest-list">
        {accommodations.map((item) => (<li key={item.id}><Link to={'/accommodation/' + item.id}>{item.Name}</Link></li>))}
        </ul>}
</>)
}
  


export default SearchBar;
