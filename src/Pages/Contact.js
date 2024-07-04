import React from 'react';
import { useLocation } from 'react-router-dom';

const Contact = () => {
    const location=useLocation();
  return (
    <div> <h1>Ur Email Id is :
    {location?.state?.email}  </h1>   
    {/* <empty>Here we are using optional chaining ,in case there is no values or no
      state it should not give the error 
    </empty> */}
    </div>
  )
}

export default Contact;
