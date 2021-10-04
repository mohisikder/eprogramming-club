import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, FormControl, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
   return (
      <footer className="bg-dark text-white mt-4">
         <Container>
            <div className="row py-4 d-flex justify-content-between">
               <div className="col-md-5">
                  <Link className="link" to="/home">
                     <h1>HealthClub</h1>
                  </Link>
                  <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, est. Fuga sint explicabo fugit eius voluptates commodi enim temporibus! Omnis ad voluptatem quibusdam nemo harum obcaecati totam itaque voluptatum voluptate.</p>
               </div>
               <div className="col-md-2">
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
               </div>
               <div className="col-md-5">
                  <h4>Get in Touch</h4>
                  <InputGroup className="mb-3 w-75">
                  <FormControl
                     placeholder="Recipient's username"
                     aria-label="Recipient's username"
                     aria-describedby="basic-addon2"
                  />
                  <Button variant="primary" size="lg">Send</Button>
               </InputGroup>
               </div>
               <p className="text-center">Copyright &copy; Mohiuddin Sikder</p>
            </div>
         </Container>
      </footer>
   );
};

export default Footer;