import React from "react";
import { Form, FormControl } from "react-bootstrap";
import "./filterStyle.css"
const Filter = ({ inputSearch, setInputSearch }) => {
  return (
    <div>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Recherche"
          className="me-2"
          aria-label="Search"
          onChange={(event) => {
            setInputSearch(event.target.value);
          }}
          value={inputSearch}
        />
      </Form>
      
    </div>
  );
};

export default Filter;
