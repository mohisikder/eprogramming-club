import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import './ServiceDetails.css'

const ServiceDetails = () => {
   const [serviceDetails, setServiceDetails] = useState([])
   useEffect(()=>{
      fetch(`./fakedb.json`)
      .then(res=> res.json())
      .then(data=> setServiceDetails(data))
   },[])
   return (
      <div>
         <Navigation/>
         <Container>
            <h2 className="mt-4 text-center">Our Services</h2>
            <hr className="w-25 m-auto"/>
            <Row xs={1} md={4} className="g-4 mt-4">
               {
                serviceDetails.map(serviceDetails=>(
                  <Col>
                     <Card className="h-100">
                     <Card.Img variant="top" src={serviceDetails.img} />
                     <Card.Body>
                        <Card.Title>{serviceDetails.title}</Card.Title>
                        <Card.Text>
                           {serviceDetails.details}
                        </Card.Text>
                        <small>Instructor by {serviceDetails.trainerName}</small>
                        <h4>$ {serviceDetails.price}</h4>
                        <Button variant="danger" className="mt-2">Buy Now</Button>
                     </Card.Body>
                     </Card>
                  </Col>
                ))
               }
            </Row>
         </Container>
         <Footer/>
      </div>
   );
};

export default ServiceDetails;