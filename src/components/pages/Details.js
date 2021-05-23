import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { BASE_URL } from '../../constants/api';
import { Card, Carousel } from 'react-bootstrap'
import Footer from '../layout/Footer';
import CardIcons from '../layout/CardIcons';

function Details() {
    const [accommodation, setAccommodation] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        fetch(BASE_URL + 'accommodations').then(response => response.json())
        .then((data) => setAccommodation(data.find(item => item.id === parseInt(id))));
        console.log(accommodation);
    }, [])
    if(!accommodation) {
        return null;
    }
    return (
        <>
        
        <div className="details-page-wrapper">
            <div className="carousel-wrapper">
        <Carousel>
        {accommodation.Image.map(img => <Carousel.Item key={img.id}><img className="details-img" alt={img.alternativeText} src={img.url} /></Carousel.Item>)}
        </Carousel>
        </div>
        <div className="card-wrapper">
            <Card id="details-card">
                <h1>{accommodation.Name}</h1>
                <h3>{accommodation.Type}</h3>
             <Card.Body>
            <div className="details-wrapper">
                  <CardIcons />
                    <Card.Text>
                    <p>{accommodation.Description}</p>
                    <p id="price">{accommodation.Price} NOK</p>
                    </Card.Text>
                    </div>
                    <div className="details-btn-wrapper">
                    <Link className="details-btn" to={`/booking/${accommodation.id}`}>Book Now</Link>
                    <div><a href="/accommodations/" className="details-btn"> Return</a></div>
                    </div>
                </Card.Body>
      </Card>
      </div>
      </div>
       <Footer/>
       </>
  );
};


export default Details;
