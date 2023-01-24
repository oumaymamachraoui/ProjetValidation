import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../JS/actions/users";
import {
  MDBContainer,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBRow,
  MDBBtn,
  MDBInput,
} from "mdb-react-ui-kit";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  const [formErrors, setFormErrors] = useState({});
  // const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleUser = (e) => {
    e.preventDefault();
    // if (setFormErrors(validate(user))) {
    //   // setIsSubmit(true);
    //   dispatch(login(user));
    //   navigate("/profil");
    // }
    // setFormErrors(validate(user))

    dispatch(login(user));
    navigate("/profil");
  };
  // const validate = (values) => {
  //   const errors = {};
  //   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  //   if (!values.email) {
  //     errors.email = "Email is required!";
  //   } else if (!regex.test(values.email)) {
  //     errors.email = "This is not a valid email format!";
  //   }
  //   if (!values.password) {
  //     errors.password = "Password is required";
  //   } else if (values.password.length < 4) {
  //     errors.password = "Password must be more than 4 characters";

  //   }
  //   return errors;
  // };
  // useEffect(() => {
  //   console.log(formErrors);
  //   if (Object.keys(formErrors).length === 0) {
  //     console.log(user);
  //   }
  // }, [formErrors]);

  return (
    <div>
      <MDBContainer
        fluid
        className="p-4 background-radial-gradient overflow-hidden"
      >
        <MDBRow>
          <MDBCol col="10" md="6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Sample image"
            />
          </MDBCol>

          <MDBCol md="6" className="position-relative">
            <div
              id="radius-shape-1"
              className="position-absolute rounded-circle shadow-5-strong"
            ></div>
            <div
              id="radius-shape-2"
              className="position-absolute shadow-5-strong"
            ></div>

            <MDBCard className="my-5 bg-glass">
              <MDBCardBody className="p-5">
                <h2 className="fw-bold mb-5">Login </h2>

                <MDBInput
                  wrapperClass="mb-4"
                  label="Email"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  size="lg"
                />
                {/* <p>{formErrors.email}</p> */}
                <MDBInput
                  wrapperClass="mb-4"
                  label="Mot de passe"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  size="lg"
                />
                {/* <p>{formErrors.password}</p> */}

                <MDBBtn
                  className=" mb-4"
                  size="md"
                  type="submit"
                  onClick={handleUser}
                >
                  connexion
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      {/* 

      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleUser}>
          Login
        </Button>
      </Form> */}
    </div>
  );
};

export default Login;
