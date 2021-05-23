import { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { ADMIN_CONTACT_URL } from "../../../../constants/api";

function MessagesList() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(ADMIN_CONTACT_URL);
        const json = await response.json();
        console.log(json);
        setFeedbacks(json);
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
            <h1>Messages</h1>
            <Button className="btn btn-primary" href={"/admin"}>Return</Button>
            </div>
      {feedbacks.map(function (questions) {
        const { name, email, message } = questions;
        return (
          <>
          <Card>
            <Card.Body className="admin-content">
            <Card.Text>
              <h1 className="admin-heading">Name:</h1>
              <p>{name}</p>
              </Card.Text>
              <Card.Text>
              <h1 className="admin-heading">Email:</h1>
              <p>{email}</p>
              </Card.Text>
              <Card.Text>
              <h1 className="admin-heading">Message:</h1>
              <p> {message}</p>
              </Card.Text>
              </Card.Body>
              </Card>
          </>
        );
      })}
    </>
  );
}

export default MessagesList;

