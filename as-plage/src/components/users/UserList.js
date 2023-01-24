import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUsers, updateAdmin } from "../../JS/actions/UserAction";
import Filter from "../filter/Filter";
import Loaading from "../loaaading/Loaading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";

const UserList = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userListReducer.users);
  const loadUser = useSelector((state) => state.userListReducer.loadUser);
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  console.log(user);
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div>
      <div style={{ margin: "50px 80px" }}>
        <Filter inputSearch={inputSearch} setInputSearch={setInputSearch} />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nom </th>
              <th>Prenom</th>
              <th>Date de naissance</th>
              <th>Adresse domicile</th>
              <th>Téléphone</th>
              <th>Email</th>
              <th>Occupation</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {loadUser ? (
              <Loaading />
            ) : (
              user
                ?.filter(
                  (reclam) =>
                    reclam.nom
                      .toLowerCase()
                      .includes(inputSearch.toLowerCase().trim()) ||
                    reclam.nom_plage
                      .toLowerCase()
                      .includes(inputSearch.toLowerCase().trim()) ||
                    reclam.note
                      .toLowerCase()
                      .includes(inputSearch.toLowerCase().trim()) ||
                    reclam.date_reclamation
                      .toLowerCase()
                      .includes(inputSearch.toLowerCase().trim()) ||
                    reclam.nom_visiteur
                      .toLowerCase()
                      .includes(inputSearch.toLowerCase().trim())
                )
                .map((el) => (
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
                      <div onClick={() => dispatch(deleteUser(el._id))}>
                        <FontAwesomeIcon
                          icon={faTrashAlt}
                          style={{ blockSize: "30px" }}
                        />
                      </div>
                    </td>
                  </tr>
                ))
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default UserList;
