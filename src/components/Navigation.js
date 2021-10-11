import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const Navigation = () => (
  <Navbar className="nav" fluid>
    <Container>
      <Navbar.Brand className="mr-auto" href="#home" as={Link} to="/home">
        <img alt="" src="framer.png" className="d-inline-block align-top" />
        FlutterUI
      </Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#info" as={Link} to="/info">
          Why FlutterUI
        </Nav.Link>
        <Nav.Link href="#docs" as={Link} to="/docs">
          Docs
        </Nav.Link>
        <Navbar.Text className="navText">It’s free!</Navbar.Text>
      </Nav>
      <Nav>
        <Nav.Link eventKey={2} href="#console">
          <Button variant="contained" disableElevation>
            Console
          </Button>
        </Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);

export default Navigation;
