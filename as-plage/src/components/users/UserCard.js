import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteUser, updateAdmin } from "../../JS/actions/UserAction";

const UserCard = ({ el }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <tr>
        <td>{el.nom}</td>
        <td>{el.prenom}</td>
        <td>{el.age}</td>
        <td>{el.adresse}</td>
        <td>{el.phone}</td>
        <td>{el.email}</td>

        <td>
          <div onClick={() => dispatch(updateAdmin(el._id))}>
            {el.isAdmin ? (
              <Button variant="warning">Administrateur </Button>
            ) : (
              <Button variant="secondary">Contôleur </Button>
            )}
          </div>
        </td>
        <td>
          <button onClick={() => dispatch(deleteUser(el._id))}>
            <FontAwesomeIcon icon={faTrashAlt} style={{ blockSize: "30px" }} />
          </button>
        </td>
      </tr>
    </div>
  );
};

export default UserCard;
