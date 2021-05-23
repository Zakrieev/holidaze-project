import React, {useState, useEffect} from 'react'

function FavouriteButton({item, setFavNum}) {
    const [isFavourited, setIsFavourited] = useState(false);
    useEffect(() => {
        setIsFavourited(JSON.parse(localStorage.getItem('favourites'))?.find(fav => fav?.id === item?.id));
    }, [item])
    const favouriteHotel = (e) => {
        e.preventDefault();
        let favourites =  JSON.parse(localStorage.getItem('favourites')) || [];
        if(isFavourited) {
            favourites = favourites.filter(fav => fav?.id !== item?.id);

            setIsFavourited(false);
        } else {
            favourites = [...favourites, item]
            setIsFavourited(true);
        }
        setFavNum(favourites.length || 0);
        localStorage.setItem('favourites', JSON.stringify(favourites));
    }
    return (
        <button onClick={favouriteHotel} className="favourite-btn"><i className={isFavourited ? 'fas fa-heart' : 'far fa-heart'}></i></button>
    )
}

export default FavouriteButton
