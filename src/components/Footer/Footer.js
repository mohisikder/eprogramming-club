import React from 'react';
import { Container, FormControl, InputGroup, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
   return (
      <footer className="bg-secondary text-white mt-4">
         <Container>
            <Row className="py-4 d-flex justify-content-between">
               <Col md={5}>
                  <Link className="link" to="/home">
                     <h4 className="text-white">eProgrammingClub</h4>
                  </Link>
                  <p >So the best advice to learn programming in 2020 is follow the project-based learning approach. Build as many projects as you can to strengthen your problem-solving skills in programming.</p>
               </Col>
               <Col md={2}>
                  <h6>Important Link</h6>
                  <ul>
                     <li style={{listStyle:"none"}}>
                        <Link className="link" to="/home">Home</Link>
                     </li>
                     <li style={{listStyle:"none"}}>
                        <Link className="link" to="/services">Services</Link>
                     </li>
                     <li style={{listStyle:"none"}}>
                        <Link className="link" to="/trainer">Trainer</Link>
                     </li>
                     <li style={{listStyle:"none"}}>
                        <Link className="link" to="/about">About</Link>
                     </li>
                  </ul>
               </Col>
               <Col md={5}>
                  <h4>Get in Touch</h4>
                  <InputGroup className="mb-3 w-75">
                  <FormControl
                     placeholder="Enter your Email..."
                     aria-label="Recipient's username"
                     aria-describedby="basic-addon2"
                  />
                  <Button variant="danger" size="lg">Send</Button>
               </InputGroup>
               <h6>Follow us</h6>
               </Col>
            </Row>
         </Container>
         <p className="text-center bg-dark mt-3 mb-0 pb-0 height">Copyright &copy; eProgrammingClub | by Mohiuddin Sikder - 2021</p>
      </footer>
   );
};

export default Footer;