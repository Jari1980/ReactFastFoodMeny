import React, { useState } from 'react';
import { Navbar, Container, Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useThemeContext } from './context';


const NavbarComp = () => {
  const {background, setBackground} = useThemeContext("")
  const [dark, setDark] = useState(false)
  
  

  function handleClick(){
    if(dark){
      setDark(false)
      setBackground("rgb(7, 7, 46)")

      // setBackground("yellow")
    }
    else{
      setDark(true)
      setBackground("rgb(147, 147, 170)")
      // setBackground("gray")
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