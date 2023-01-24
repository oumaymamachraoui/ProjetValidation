import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol
} from "mdb-react-ui-kit";

const FooterNavBar = () => {
  return (
    <div>
      <MDBFooter
        bgColor="light"
        className="text-center text-lg-start text-muted"
      >
        <section style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
          <MDBContainer className="text-center text-md-start mt-3">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4" style={{marginTop:"20px"}}>As- plage</h6>
                <p>
                  c'est une application dédiée aux municipalités pour organiser
                  les plages et pour consulter les appels d'offre
                </p>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4" style={{marginTop:"20px"}}>Technologies</h6>
                <p>
                  <a href="https://reactjs.org/" className="text-reset">
                    React Js
                  </a>
                </p>
                <p>
                  <a href="https://nodejs.org/en/" className="text-reset">
                    Node Js
                  </a>
                </p>
                <p>
                  <a href="https://www.mongodb.com/" className="text-reset">
                    MongoDb
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="3" lg="2" xl="3" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4" style={{marginTop:"20px"}}>liens </h6>
                {/* <p>
                  <Link to="/" className="text-reset">
                    
                  </Link>
                </p> */}
                <p>
                  <a href="/" className="text-reset">
                    Accueil
                  </a>
                </p>
                <p>
                  <a href="/endroit" className="text-reset">
                    La list des endroits
                  </a>
                </p>
                <p>
                  <a href="/document" className="text-reset">
                    Les document demander
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="2" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4" style={{marginTop:"20px"}}>Contact</h6>

                <p>oumayma1357@gmail.com</p>
                <p>+ 216 54 956 482</p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
        >
          © 2021 Copyright: Machraoui Oumayma
        </div>
      </MDBFooter>
    </div>
  );
};

export default FooterNavBar;
