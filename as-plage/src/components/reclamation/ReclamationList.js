import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  editReclam,
  getReclamations,
} from "../../JS/actions/ReclamationAction";
import Filter from "../filter/Filter";
import Loaading from "../loaaading/Loaading";

const ReclamationList = () => {
  const dispatch = useDispatch();

  const reclam = useSelector((state) => state.ReclamationReducer.reclamation);
  const load = useSelector((state) => state.ReclamationReducer.load);

  useEffect(() => {
    dispatch(getReclamations());
  }, [dispatch]);
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div style={{ margin: "50px 80px" }}>
      <Filter inputSearch={inputSearch} setInputSearch={setInputSearch} />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nom du plage</th>
            <th>Nom de l'endroit</th>
            <th>Nom du visiteur</th>
            <th>Reclamation</th>
            <th>Date de reclamation</th>
            <th>Etat de reclamation</th>
          </tr>
        </thead>
        <tbody>
          {load ? (
            <Loaading />
          ) : (
            reclam
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
                  <td>{el.nom_plage}</td>
                  <td>{el.nom}</td>
                  <td>{el.nom_visiteur}</td>
                  <td>{el.note}</td>
                  <td>{el.date_reclamation}</td>
                  <td>
                    <div onClick={() => dispatch(editReclam(el._id))}>
                      {el.resolu ? (
                        <Button variant="success">Resolu </Button>
                      ) : (
                        <Button variant="danger">Non resolu </Button>
                      )}
                    </div>
                  </td>
                </tr>
              ))
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default ReclamationList;
