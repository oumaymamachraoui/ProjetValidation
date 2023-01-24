import React from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteEndroit } from "../../JS/actions/EndroitAction";
import "./style.css";
import { MDBCardImage, MDBRipple } from "mdb-react-ui-kit";

const EndroitsCard = ({ endroit }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const user = useSelector((state) => state.userReducer.user);

  return (
    <div className="card-div">
      <Card style={{ width: "18rem", height: "500px" }}>
        <MDBRipple
          rippleColor="light"
          rippleTag="div"
          className="bg-image hover-overlay"
        >
          <MDBCardImage
            src="https://mdbootstrap.com/img/new/standard/nature/111.webp"
            fluid
            alt="..."
          />
          <a>
            <div
              className="mask"
              style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
            ></div>
          </a>
        </MDBRipple>
        <Card.Body>
          <Card.Title>Plage :{endroit.nom_plage}</Card.Title>
          <Card.Title>Nom de l'endroit :{endroit.nom}</Card.Title>
          <Card.Text className="descript">
            Type de lotissement : {endroit.type_lot}
          </Card.Text>

          <Card.Text className="descript">
            Superficie : {endroit.superficie}
          </Card.Text>
          <Card.Text className="descript">
            Nombre des parasols : {endroit.nbre_parasol}
          </Card.Text>
          <Card.Text className="descript">
            Prix de localtion : {endroit.prix}
          </Card.Text>

          {isAuth && user.isAdmin ? (
            <div>
              <Button
                style={{ marginRight: "10px" }}
                onClick={() => navigate(`/edit/${endroit._id}`)}
              >
                Modifier
              </Button>
              <Button
                variant="danger"
                onClick={() => dispatch(deleteEndroit(endroit._id))}
              >
                Supprimer
              </Button>
            </div>
          ) : (
            null
          )}
          { !isAuth ? <Button onClick={() => navigate(`/reclamation/${endroit._id}`)}>
              Reclamer
            </Button>: null}
        </Card.Body>
      </Card>
    </div>
  );
};

export default EndroitsCard;
