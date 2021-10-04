import React from 'react';
import './Error.css';

const Error = () => {
   return (
      <div className="bg-dark text-white vh-100 text-center error">
         <h1>404</h1>
         <h4>Page Not Found.</h4>
      </div>
   );
};

export default Error;