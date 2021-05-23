import React from 'react'
import { Card, Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CardIcons from './CardIcons';
import FavouriteButton from './FavouriteButton'

function HotelCard({item, setFavNum}) {
    if (!item) return null;
    return (
    <Card style={{ width: '18rem' }}>
                <Carousel>
                {item.Image.map(img => <Carousel.Item key={img.id}><img className="card-img-top" alt={img.alternativeText} src={img.url} /></Carousel.Item>)}
                </Carousel>
                <Card.Body>
                    <Card.Subtitle>{item.Type}</Card.Subtitle>
                    <Link className="feautured-links" to={"/accommodation/" + item.id}><Card.Title>{item.Name}<FavouriteButton setFavNum={setFavNum} item={item} /></Card.Title></Link>
                    <CardIcons />
                    <div>{item.Price} NOK</div>
                    <Card.Text>
                        {item.Description}
                    </Card.Text>
                    <Card.Link className="btn btn-primary" href={"/booking/" + item.id}>Book Now</Card.Link>
                    <Card.Link className="btn btn-primary" href={"/accommodation/" + item.id}>Read More</Card.Link>
                </Card.Body>
    </Card>
    )
}

export default HotelCard
