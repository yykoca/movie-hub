import React from "react";
import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";

function Header() {
  return (
    <Navbar collapseOnSelect bg="dark" expand="lg" variant="dark">
      <Navbar.Brand href="#">Movie-Hub</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav
          className="mr-auto my-2 my-lg-0 justify-content-end"
          style={{ maxHeight: "100px" }}>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#favorites">Favorites</Nav.Link>
          <Nav.Link href="#watched">Watched Films</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
        </Nav>
        {/* <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="mr-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form> */}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
