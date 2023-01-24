import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";
import React from "react";
import plage from "./plage.jpg";
import "./style.css";
const Home = () => {
  return (
    <div>
      <MDBCol lg="9" style={{ margin: " 20px auto 20px", padding: "30px" }}>
        <MDBCardTitle
          style={{
            marginBottom: "30px",
            textAlign: "left",
            marginLeft: "20px",
          }}
        >
          {" "}
          Nouveauté :
        </MDBCardTitle>
        <MDBCard className="mb-4">
          <MDBCardBody>
            <MDBRow>
              <MDBRow>
                <MDBCardText style={{ textAlign: "left", fontSize: "18px" }}>
                  Le Maire de la municipalité de Ras Jbal a déposé une nouvelle
                  offre d'appels pour l'allocation saisonnière de la plage de
                  Chat Mami
                </MDBCardText>
              </MDBRow>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="mb-4">
          <MDBCardBody>
            <MDBRow>
              <MDBRow>
                <MDBCardText style={{ textAlign: "left", fontSize: "18px" }}>
                  Le Maire de la municipalité de Tunis a déposé une nouvelle
                  offre d'appels pour l'allocation saisonnière de la plage de
                  Marsa
                </MDBCardText>
              </MDBRow>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="mb-4">
          <MDBCardBody>
            <MDBRow>
              <MDBRow>
                <MDBCardText style={{ textAlign: "left", fontSize: "18px" }}>
                  Le Maire de la municipalité de Tunis a déposé une nouvelle
                  offre d'appels pour l'allocation saisonnière de la plage de La
                  Goulette
                </MDBCardText>
              </MDBRow>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </div>
  );
};

export default Home;
