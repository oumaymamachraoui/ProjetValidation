import {
  MDBBtn,
  MDBCollapse,
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarNav,
} from "mdb-react-ui-kit";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../JS/actions/users";
import logo from "./logoAs-plage.png";
const Navigation = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const load = useSelector((state) => state.userReducer.loadUser);
  const user = useSelector((state) => state.userReducer.user);
  const navigate = useNavigate();
  const [showNavText, setShowNavText] = useState(false);
  const [showNavRight, setShowNavRight] = useState(false);

  return (
    <div>
      <MDBNavbar expand="lg" light bgColor="light">
        <MDBContainer fluid>
          <MDBNavbarBrand>
            <img src={logo} height="50" alt="" loading="lazy" />
          </MDBNavbarBrand>

          <MDBCollapse navbar show={showNavText}>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current="page">
                  <Link to="/">Accueil</Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink>
                  {" "}
                  <Link to="/endroit">Endroit</Link>{" "}
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="/document">
                  {" "}
                  <Link to="/document">Document</Link>{" "}
                </MDBNavbarLink>
              </MDBNavbarItem>

              {isAuth && user.isAdmin ? (
                
                    <MDBNavbarItem>
                      {" "}
                      <MDBNavbarLink>
                        {" "}
                        <Link to="/user">Utilisateurs</Link>
                      </MDBNavbarLink>{" "}
                    </MDBNavbarItem>
                
              ) : (
                <Link to="/" />
              )}

              {isAuth ? (
                <MDBNavbarItem>
                  <MDBNavbarLink > <Link to="reclamation">Reclamation</Link></MDBNavbarLink>
                </MDBNavbarItem>
              ) : (
                <Link to="/" />
              )}

              

              {isAuth  ? (
                <MDBNavbarItem>
                  <MDBNavbarLink>
                    {" "}
                    <Link to="/profil"> Profil</Link>
                  </MDBNavbarLink>
                </MDBNavbarItem>
              ) : (
                <Link to="/" />
              )}
            </MDBNavbarNav>

            {isAuth ? (
              <MDBBtn
                outline
                onClick={() => {
                  dispatch(logout());
                  navigate("/");
                }}
              >
                Logout
              </MDBBtn>
            ) : (
              <div>
                <MDBCollapse navbar show={showNavRight}>
                  <MDBNavbarNav
                    right
                    fullWidth={false}
                    className="mb-2 mb-lg-0"
                  >
                    <MDBNavbarItem>
                      <MDBBtn outline onClick={() => navigate("/login")} style={{marginRight:"10px"}}>
                        Login
                      </MDBBtn>
                      {/* <Link to="/login"> Login</Link> */}
                    </MDBNavbarItem>
                    <MDBNavbarItem> </MDBNavbarItem>

                    <MDBNavbarItem>
                      <MDBBtn outline onClick={() => navigate("/register")}>
                        S'inscrire
                      </MDBBtn>{" "}
                    </MDBNavbarItem>
                    <MDBNavbarItem></MDBNavbarItem>
                  </MDBNavbarNav>
                </MDBCollapse>
              </div>
            )}
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
};

export default Navigation;
