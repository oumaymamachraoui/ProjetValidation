import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editUser } from "../../JS/actions/UserAction";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBInput,
} from "mdb-react-ui-kit";
const EditUser = () => {
  const params = useParams();

  const dispatch = useDispatch();
  const [newUser, setNewUser] = useState({});
  const user = useSelector((state) =>
    params.id
      ? state.userListReducer.users.find((user) => user._id === params.id)
      : null
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (user) setNewUser(user);
  }, [user]);

  const handleChange = (e) => {
    e.preventDefault();
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };
  const edit = async (e) => {
    e.preventDefault();
    dispatch(editUser(params.id, newUser));
    navigate("/profil");
  };
  console.log(newUser);

  return (
    <div>
      <MDBCard
        className="my-5 bg-glass"
        style={{ marginRight: "300px", marginLeft: "300px" }}
      >
        <MDBCardBody className="p-5">
          <h2 className="fw-bold mb-5">Modifier le profil </h2>

          <MDBRow>
            <MDBCol col="6">
              <MDBInput
                wrapperClass="mb-4"
                label="Nom"
                type="text"
                size="lg"
                name="nom"
                value={newUser.nom}
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
                value={newUser.prenom}
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
                value={newUser.age}
              />
            </MDBCol>

            <MDBCol col="6">
              <MDBInput
                wrapperClass="mb-4"
                label="Numero de téléphone"
                type="number"
                size="lg"
                name="phone"
                value={newUser.phone}
                onChange={handleChange}
              />
            </MDBCol>
          </MDBRow>

          <MDBInput
            wrapperClass="mb-4"
            label="Adresse domicile"
            type="text"
            name="adresse"
            value={newUser.adresse}
            onChange={handleChange}
            size="lg"
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Email"
            type="email"
            name="email"
            value={newUser.email}
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
          <MDBBtn className=" mb-4" size="md" type="submit" onClick={edit}>
            Modifier
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
      {/* 
      <h2> Edit User</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>nom </Form.Label>
          <Form.Control
            type="text"
            name="nom"
            value={newUser.nom}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>prenom</Form.Label>
          <Form.Control
            type="text"
            value={newUser.prenom}
            name="prenom"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            onChange={handleChange}
            value={newUser.email}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={edit}>
          Edit user
        </Button>
      </Form> */}
    </div>
  );
};

export default EditUser;
