import React from "react";
import { useSelector } from "react-redux";
import DocsCard from "./DocsCard";
import {
  MDBCol,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
} from "mdb-react-ui-kit";
const DocsList = ({ setCurrentId }) => {
  const docs = useSelector((state) => state.docs);
  return !docs ? (
    <h2>loaaading </h2>
  ) : (
    <div>
      <MDBCol lg="8" style={{ margin: " 0px auto 20px", padding: "30px" }}>
        <MDBCardTitle style={{ marginBottom: "30px" }}>
          {" "}
          Les documents demander :
        </MDBCardTitle>
        <MDBCard className="mb-4">
          <MDBCardBody>
            <MDBRow>
              {docs?.map((doc) => (
                <div key={doc._id}>
                  <DocsCard doc={doc} setCurrentId={setCurrentId} />
                </div>
              ))}
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </div>
  );
};

export default DocsList;
