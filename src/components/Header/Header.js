import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Navigation from '../Navigation/Navigation';
import './Header.css';

const Header = () => {
   return (
      <div>
         <Navigation/>
         <div className="bg-img d-flex justify-content-center align-items-center">
            <Container>
               <div className="header-overlay">
                  <div className="row">
                     <div className="col-md-12  p-4 text-center m-auto w-50 header-text">
                        <h1>take action now</h1>
                        <h6>get ready and start</h6>
                        <Button variant="primary" size="lg" className="mt-2 lg">Join Now</Button>
                     </div>
                  </div>
               </div>
            </Container>
         </div>
      </div>
   );
};

export default Header;