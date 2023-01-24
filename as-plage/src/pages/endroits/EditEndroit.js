import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useMatch, useNavigate } from "react-router-dom";
import { editEndroit, getEndroit } from "../../JS/actions/EndroitAction";
import { MDBBtn, MDBCard, MDBCardBody, MDBInput } from "mdb-react-ui-kit";
import '../style.css'

const EditEndroit = () => {
  const match = useMatch("/edit/:id");

  const dispatch = useDispatch();
  const [newEndroit, setNewEndroit] = useState({});
  const endroit = useSelector((state) =>
    match.params.id
      ? state.EndroitReducer.allEndroits.find(
          (endroit) => endroit._id === match.params.id
        )
      : null
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (endroit) setNewEndroit(endroit);
  }, [endroit]);

  const handleChange = (e) => {
    e.preventDefault();
    setNewEndroit({ ...newEndroit, [e.target.name]: e.target.value });
  };
  const edit = async (e) => {
    e.preventDefault();
    dispatch(editEndroit(match.params.id, newEndroit));
    navigate("/endroit");
  };

  return (
    <div>
      <div>
        <MDBCard
          className="my-5 bg-glass"
          style={{ marginRight: "300px", marginLeft: "300px" }}
        >
          <MDBCardBody className="p-5">
            <h2 className="fw-bold mb-5">Modifier l'endroit </h2>

            <MDBInput
              wrapperClass="mb-4"
              label="Nom du plage"
              type="text"
              name="nom_plage"
              value={newEndroit.nom_plage}
              onChange={handleChange}
              size="lg"
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Nom de l'endroit"
              type="text"
              name="nom"
              value={newEndroit.nom}
              onChange={handleChange}
              size="lg"
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Superficie"
              type="number"
              name="superficie"
              onChange={handleChange}
              value={newEndroit.superficie}
              size="lg"
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Nombre des parasols"
              type="number"
              name="nbre_parasol"
              value={newEndroit.nbre_parasol}
              onChange={handleChange}
              size="lg"
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Prix"
              type="number"
              name="prix"
              value={newEndroit.prix}
              onChange={handleChange}
              size="lg"
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Type du lotissement"
              type="text"
              name="type_lot"
              value={newEndroit.type_lot}
              onChange={handleChange}
              size="lg"
            />

            <MDBBtn className=" mb-4" size="md" type="submit" onClick={edit}>
              Modifier
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </div>

      
    </div>
  );
};

export default EditEndroit;
