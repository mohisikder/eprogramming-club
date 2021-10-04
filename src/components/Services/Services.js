import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import './Services.css';

const Services = () => {
   const [services, setServices] = useState([])

   useEffect(()=>{
      fetch(`./fakedb.json`)
      .then(res=> res.json())
      .then(data=> setServices(data))
   },[])
   return (
      <div>
         <Container>
            <Row xs={1} md={2} className="g-4 mt-4">
               {
                  services.slice(0, 4).map(service =>(
                     <Col>
                        <Card className="h-100">
                        <Card.Img variant="top" src={service.img} />
                        <Card.Body>
                           <Card.Title>{service.title}</Card.Title>
                           <Card.Text>
                              {service.details}
                           </Card.Text>
                           <small>Instructor by {service.trainerName}</small>
                           <h4>$ {service.price}</h4>
                           <Button variant="danger">Add To Cart</Button>
                        </Card.Body>
                        </Card>
                     </Col>
                  ))
               }
            </Row>
         </Container>
      </div>
   );
};

export default Services;