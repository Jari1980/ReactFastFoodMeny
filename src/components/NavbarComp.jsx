import React, { useState } from 'react';
import { Navbar, Container, Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const NavbarComp = () => {
  const [dark, setDark] = useState(false)

  function handleClick(){
    if(dark){
      setDark(false)
    }
    else{
      setDark(true)
    }
  }

    return (
        <>
        <Navbar expand="lg" bg="dark" data-bs-theme="dark" sticky="top">
        <Container >
          <Navbar.Brand as={Link} to="/home">House of Broccoli</Navbar.Brand>
          <Button variant="outline-secondary" size="sm" onClick={handleClick}>{dark ? 'Light Theme' : 'Dark Theme'}</Button>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/meny">Meny</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        </>
    );
};

export default NavbarComp;