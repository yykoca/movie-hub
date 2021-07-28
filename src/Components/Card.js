import React from "react";
import { Col, Card } from "react-bootstrap";
function Cards({ movie }) {
  console.log("card", movie);
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.overview}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Release date: {movie.release_date}</small>
        </Card.Footer>
      </Card>
    </Col>
  );
}

export default Cards;
