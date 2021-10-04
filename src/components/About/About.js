import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import './About.css';

const About = () => {
   return (
      <div>
         <Navigation/>
         <div className="bg-secondary py-80">
            <Container>
               <Row className="mb-4 py-4 d-flex justify-content-center align-items-center">
                  <Col md={5}>
                     <h1 className="text-white about-title">We share <br />
                     knowledge <br />
                     with the world</h1>
                  </Col>
                  <Col md={7}>
                     <img className="shadow-lg" src={`https://media.istockphoto.com/vectors/young-female-character-writing-code-on-a-desktop-computer-working-vector-id1219473620?k=20&m=1219473620&s=612x612&w=0&h=rgN3XvnCmlaLpiFimQ9QaAoZcfV0OVKdrtN95CSwCHA=`} alt="" />
                  </Col>
               </Row>
            </Container>
         </div>
         <Container>
            <Row className="text-center m-auto w-75 py-80 my-80">
               <Col md={12}>
                  <h1>Changing learning for the better</h1>
                  <h6>Whether you want to learn or to share what you know, you’ve come to the right place. As a global destination for online learning, we connect people through knowledge.</h6>
               </Col>
            </Row>
         </Container>
         <div className="bg-primary py-80 my-80">
            <Container>
               <Row className="py-4 text-white">
                  <Col md={6}>
                     <img className="shadow-lg" src={`https://media.istockphoto.com/photos/the-sales-department-scores-again-picture-id1291751221?b=1&k=20&m=1291751221&s=170667a&w=0&h=PcMe7k0T31nY5_lGAK_c6Us9g4iwGAIg47OVzthSBpk=`} alt="" />
                  </Col>
                  <Col md={6}>
                     <h2>Our Instractor</h2>
                     <p>We’re committed to changing the future of learning for the better. Dig into our original research to learn about the forces that are shaping the modern workplace.</p>
                  </Col>
               </Row>
            </Container>
         </div>
         <Footer/>
      </div>
   );
};

export default About;