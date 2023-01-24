import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addEndroit } from "../../JS/actions/EndroitAction";
import { useNavigate } from "react-router-dom";
import { MDBBtn, MDBCard, MDBCardBody, MDBInput } from "mdb-react-ui-kit";
import "../style.css";

const AddEndroit = () => {
  const dispatch = useDispatch();
  const [newEndroit, setNewEndroit] = useState({
    nom: "",
    nom_plage: "",
    superficie: "",
    nbre_parasol: "",
    prix: "",
    type_lot: "",
  });

  const handleChange = (e) => {
    setNewEndroit({ ...newEndroit, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const add = () => {
    dispatch(addEndroit(newEndroit));
    navigate("/endroit");
  };
  return (
    <div>
      <MDBCard
        className="my-5 bg-glass"
        style={{ marginRight: "300px", marginLeft: "300px" }}
      >
        <MDBCardBody className="p-5">
          <h2 className="fw-bold mb-5">Ajouter un endroit </h2>

          <MDBInput
            wrapperClass="mb-4"
            label="Nom du plage"
            type="text"
            name="nom_plage"
            onChange={handleChange}
            size="lg"
            required
          />

          <MDBInput
            wrapperClass="mb-4"
            label="Nom de l'endroit"
            type="text"
            name="nom"
            onChange={handleChange}
            size="lg"
            required
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Superficie"
            type="number"
            name="superficie"
            onChange={handleChange}
            size="lg"
            required
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Nombre des parasols"
            type="number"
            name="nbre_parasol"
            onChange={handleChange}
            size="lg"
            required
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Prix"
            type="number"
            name="prix"
            onChange={handleChange}
            size="lg"
            required
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Type du lotissement"
            type="text"
            name="type_lot"
            onChange={handleChange}
            size="lg"
            required
          />

          <MDBBtn className=" mb-4" size="md" type="submit" onClick={add}>
            Ajouter
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};

export default AddEndroit;
