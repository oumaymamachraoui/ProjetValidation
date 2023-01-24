import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createDoc, updateDoc } from "../../../JS/actions/DocumentAction";
import {
  MDBBtn,
  MDBCardTitle,
  MDBInput,
} from "mdb-react-ui-kit";
import "./style.css";

const Form = ({ currentId, setCurrentId }) => {
  const [docData, setDocData] = useState({ description: "" });
  const doc = useSelector((state) =>
    currentId ? state.docs.find((doc) => doc._id === currentId) : null
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (doc) setDocData(doc);
  }, [doc]);

  const clear = () => {
    setCurrentId(0);
    setDocData({ description: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createDoc(docData));
      clear();
    } else {
      dispatch(updateDoc(currentId, docData));
      clear();
    }
  };

  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const user = useSelector((state) => state.userReducer.user);

  return (
    <div>
      
      {isAuth && user.isAdmin ? (
        <div>
          <form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <MDBCardTitle style={{ padding: "20px" }}>
              {" "}
              {currentId ? "Modifier le document" : "Ajouter un document"}{" "}
            </MDBCardTitle>
            <div className="insertData">
              <MDBInput
                wrapperClass="mb-4"
                name="description"
                value={docData.description}
                onChange={(e) =>
                  setDocData({ ...docData, description: e.target.value })
                }
                size="lg"
              />
            </div>
            <MDBBtn type="submit" style={{marginBottom:"20px"}}>
              {currentId===0 ? "Ajouter " : "Modifier"}{" "}
            </MDBBtn>
          </form>
        </div>
      ) : null}
    </div>
  );
};

export default Form;
