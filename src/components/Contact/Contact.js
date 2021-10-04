import React from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import './Contact.css';
const Contact = () => {
   return (
      <div>
         <Navigation/>
         <Container>
            <Row className="py-80 m-auto">
               <Col md={5}>
                  <Form>
                     <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                     </Form.Group>
                     <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                        <Button variant="primary" className="btn-lg mt-2">Send Message</Button>
                     </Form.Group>
                  </Form>
               </Col>
               <Col md={6} className="m-left">
                  <h3>eProgrammingClub</h3>
                  <address>
                  1600 Amphitheatre Parkway <br />
                  Mountain View, CA 94043, USA <br />
                  (650) 253-0000
                  </address>
               </Col>
            </Row>
         </Container>
         <Footer/>
      </div>
   );
};

export default Contact;