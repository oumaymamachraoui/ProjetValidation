import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteDoc } from "../../JS/actions/DocumentAction";
import { MDBRow, MDBCardText, MDBBtn } from "mdb-react-ui-kit";

const DocsCard = ({ doc, setCurrentId }) => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const user = useSelector((state)=> state.userReducer.user)
  return (
    <div>
      {/* <MDBRow> */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "10px",
          }}
        >
          <MDBCardText style={{ width: "500px", textAlign: "left" }}>
            {doc.description}
          </MDBCardText>
          {isAuth && user.isAdmin ? (
            <div>
              <MDBBtn type="submit" onClick={() => setCurrentId(doc._id)}>
                {" "}
                Modifier{" "}
              </MDBBtn>
              <MDBBtn 
                className="mx-2"
                color="danger"
                type="submit"
                onClick={() => dispatch(deleteDoc(doc._id))}
              >
                {" "}
                Supprimer{" "}
              </MDBBtn>
            </div>
          ) : null}
        </div>
        <hr />
      {/* </MDBRow> */}

    </div>
  );
};

export default DocsCard;
