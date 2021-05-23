import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { BASE_URL } from '../../../constants/api';
import { Card, Carousel } from 'react-bootstrap'
import Footer from '../../layout/Footer';
import CardIcons from '../../layout/CardIcons';
import Enquiries from '../../layout/Enquiries';

function BookHotel({setFavNum}) {
    const [accommodation, setAccommodation] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        fetch(BASE_URL + 'accommodations').then(response => response.json())
        .then((data) => setAccommodation(data.find(item => item.id === parseInt(id))));
        console.log(accommodation);
    }, [id, accommodation])
    if(!accommodation) {
        return null;
    }
    return (
        <>
        <div className="accommodations-banner">
      <h1>Book Your Stay At {accommodation.Name}</h1>
    </div>
        <section className="booking">
         <Card className="booking-card">
                <Carousel>
                {accommodation.Image.map(img => <Carousel.Item key={img.id}><img className="booking-card-img" alt={img.alternativeText} src={img.url} /></Carousel.Item>)}
                </Carousel>
                <Card.Body>
                    <Card.Subtitle>{accommodation.Type}</Card.Subtitle>
                    <Link className="feautured-links" to={"/accommodation/" + accommodation.id}><Card.Title>{accommodation.Name}</Card.Title></Link>
                    <CardIcons />
                    <div>{accommodation.Price} NOK</div>
                    <Card.Text>
                        {accommodation.Description}
                    </Card.Text>
                </Card.Body>
      </Card>
      <Enquiries />
      </section>
       <Footer/>
       </>
  );
};


export default BookHotel;
