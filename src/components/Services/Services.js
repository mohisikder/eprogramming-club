import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Services.css';

const Services = () => {
   const [services, setServices] = useState([])
   useEffect(()=>{
      fetch(`./fakedb`)
      .then(res=> res.json())
      .then(data=> console.log(data))
   },[])
   return (
      <div>
         <Container>
            <Row xs={1} md={2} className="g-4 mt-4">
            {Array.from({ length: 4 }).map((_, idx) => (
               <Col>
                  <Card>
                  <Card.Img variant="top" src="holder.js/100px160" />
                  <Card.Body>
                     <Card.Title>Card title</Card.Title>
                     <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit longer.
                     </Card.Text>
                  </Card.Body>
                  </Card>
               </Col>
            ))}
            </Row>
         </Container>
      </div>
   );
};

export default Services;