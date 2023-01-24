import React from "react";
import { Button, Spinner } from "react-bootstrap";

const Loaading = () => {
  return (
    <div>
      <h2>
        loading
        <Spinner animation="grow" size="sm" />  
        <Spinner animation="grow" size="sm" />    
        <Spinner animation="grow" size="sm" />  
          {" "}
      </h2>
    </div>
  );
};

export default Loaading;
