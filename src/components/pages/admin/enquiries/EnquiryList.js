import { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { ENQUIRIES_URL } from "../../../../constants/api";

function EnquiryList() {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(ENQUIRIES_URL);
        const json = await response.json();
        console.log(json);
        setEnquiries(json);
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <h2>Page Is Loading...</h2>
      </div>
    );
  }

  if (error) {
    return <div>Ups, something went wrong: {error}</div>;
  }

  return (
    <>
     <div className="accommodations-banner">
            <h1>Enquiries</h1>
            <Button className="btn btn-primary" href={"/admin"}>Return</Button>
            </div>
        {enquiries.map(function (questions) {
        const { name, email, checkin, checkout } = questions;
        return (
          <Card>
          <Card.Body className="admin-content">
          <Card.Text>
            <h1 className="admin-heading">Name:</h1>
            <p> {name}</p>
            </Card.Text>
            <Card.Text>
            <h1 className="admin-heading">Email:</h1>
            <p> {email}</p>
            </Card.Text>
            <Card.Text>
            <h1 className="admin-heading">Check-In date:</h1>
            <p>{checkin}</p>
            </Card.Text>
            <Card.Text>
            <h1 className="admin-heading">Check-Out date:</h1>
            <p>{checkout}</p>
            </Card.Text>
            </Card.Body>
            </Card>
        );
      })}
    </>
  );
}

export default EnquiryList;

