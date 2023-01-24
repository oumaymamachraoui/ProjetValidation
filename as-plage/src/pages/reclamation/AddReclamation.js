import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useMatch, useNavigate, useParams } from "react-router-dom";
import { addReclamation } from "../../JS/actions/ReclamationAction";
import { MDBBtn, MDBCard, MDBCardBody, MDBInput } from "mdb-react-ui-kit";

const AddReclamation = () => {
  const params = useParams();

  const dispatch = useDispatch();

  const [newReclamation, setNewReclamation] = useState({
    nom_visiteur: "",
    note: "",
    date_reclamation: Date.now(),
    endroitId: params.id,
  });

  console.log(params.id);

  const handleChange = (e) => {
    setNewReclamation({ ...newReclamation, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();
  const add = () => {
    dispatch(addReclamation(newReclamation, params.id));
    navigate("/endroit");
  };
  console.log(newReclamation);
  return (
    <div>
      {/* <h2> Add Reclamation</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>nom visiteur</Form.Label>
          <Form.Control
            type="text"
            placeholder="nom du visiteur"
            name="nom_visiteur"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>note</Form.Label>
          <Form.Control
            type="text"
            placeholder="note"
            name="note"
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={add}>
          Add Reclamation
        </Button>
      </Form> */}

      <MDBCard
        className="my-5 bg-glass"
        style={{ marginRight: "300px", marginLeft: "300px" }}
      >
        <MDBCardBody className="p-5">
          <h2 className="fw-bold mb-5">Créer une reclamation </h2>

          <MDBInput
            wrapperClass="mb-4"
            label="Nom du visiteur"
            type="text"
            name="nom_visiteur"
            onChange={handleChange}
            size="lg"
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Reclamation"
            type="text"
            name="note"
            onChange={handleChange}
            size="lg"
          />

          <MDBBtn className=" mb-4" size="md" type="submit" onClick={add}>
            Enregistrer
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};

export default AddReclamation;
