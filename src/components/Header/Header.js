import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Navigation from '../Navigation/Navigation';
import './Header.css';

const Header = () => {
   return (
      <div>
         <Navigation/>
         <div className="bg-img d-flex justify-content-center align-items-center">
            <Container>
               <div className="header-overlay">
                  <Row>
                     <Col md={12} className="p-4 text-center m-auto w-75 header-text">
                        <h1>Code is like humor. When you have to explain it, it’s bad.</h1>
                        <p>So the best advice to learn programming in 2020 is follow the project-based learning approach. Build as many projects as you can to strengthen your problem-solving skills in programming. Remember that programming is not about learning a language (Python, C++, Java, etc.), it is the ability to solve the problems</p>
                        <Button variant="danger" size="lg" className="mt-2 lg">Join Now</Button>
                     </Col>
                  </Row>
               </div>
            </Container>
         </div>
      </div>
   );
};

export default Header;