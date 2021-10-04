import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
   return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="shadow">
         <Container>
            <Navbar.Brand href="/" className="text-white">eProgrammingClub</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
               <Nav className="ms-auto">
                  <ul className="d-flex">
                     <Link to="/home" className="items">
                        <li>Home</li>
                     </Link>
                     <Link to="/services" className="items">
                        <li>Services</li>
                     </Link>
                     <Link to="/trainer" className="items">
                        <li>Trainer</li>
                     </Link>
                     <Link to="/about" className="items">
                        <li>About us</li>
                     </Link>
                     <Link to="contact" className="items">
                        <li>Contact us</li>
                     </Link>
                  </ul>
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
};

export default Navigation;