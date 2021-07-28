import React from "react";
import { Container, Row } from "react-bootstrap";
import Cards from "../Components/Card";

function Home({ movies, pageNumber, setPageNumber }) {
  console.log("ne geldi home", movies);
  const moviesArray = [];
  for (let movie in movies) {
    moviesArray.push(movies[movie]);
  }

  function makePagePrevious() {
    if (pageNumber !== 1) {
      setPageNumber(pageNumber - 1);
    }
  }

  function makePageNext() {
    setPageNumber(pageNumber + 1);
  }
  return (
    <Container fluid="md">
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {moviesArray.map((movie, key) => {
          return <Cards movie={movie} key={key} />;
        })}
      </Row>
      <br />
      {pageNumber} <br />
      <br />
      <button onClick={makePagePrevious}>Previous</button>
      <button onClick={makePageNext}>Next</button>
    </Container>
  );
}

export default Home;
