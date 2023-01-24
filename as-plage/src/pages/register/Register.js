import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../../JS/actions/users";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBInput,
} from "mdb-react-ui-kit";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({});
  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };
  const handleUser = (e) => {
    e.preventDefault();
    dispatch(register(newUser));
    navigate("/home");
  };

  return (
    <div>
      <MDBContainer fluid className="p-3 my-5 h-custom">
        <MDBRow>
          <MDBCol col="10" md="6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Sample image"
            />
          </MDBCol>

          <MDBCol md="6" className="position-relative">
            <MDBCard className="my-5 bg-glass">
              <MDBCardBody className="p-5">
                <MDBRow>
                  <MDBCol col="6">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Nom"
                      type="text"
                      size="lg"
                      name="nom"
                      onChange={handleChange}
                    />
                  </MDBCol>

                  <MDBCol col="6">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Prenom"
                      type="text"
                      size="lg"
                      name="prenom"
                      onChange={handleChange}
                    />
                  </MDBCol>
                </MDBRow>

                <MDBRow>
                  <MDBCol col="6">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Date de naissance"
                      type="Date"
                      size="lg"
                      name="age"
                      onChange={handleChange}
                    />
                  </MDBCol>

                  <MDBCol col="6">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Numero de téléphone"
                      type="number"
                      size="lg"
                      name="phone"
                      onChange={handleChange}
                    />
                  </MDBCol>
                </MDBRow>

                <MDBCol col="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Adresse domicile"
                    type="text"
                    size="lg"
                    name="adresse"
                    onChange={handleChange}
                  />
                </MDBCol>

                <MDBInput
                  wrapperClass="mb-4"
                  label="Email"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  size="lg"
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  size="lg"
                />

                <MDBBtn
                  className="mb-4"
                  size="md"
                  type="submit"
                  onClick={handleUser}
                >
                  S'inscrire
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Register;
