import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getEndroit, getOneEndroit } from "../../JS/actions/EndroitAction";
import Filter from "../filter/Filter";
import Loaading from "../loaaading/Loaading";
import EndroitsCard from "./EndroitsCard";
import "./style.css";

const EndroitsList = () => {
  const dispatch = useDispatch();
  const end = useSelector((state) => state.EndroitReducer.allEndroits);
  const load = useSelector((state) => state.EndroitReducer.load);
  useEffect(() => {
    dispatch(getEndroit());
  }, [dispatch]);
  console.log(end);
  console.log(load);
  const navigate = useNavigate();

  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const user = useSelector((state) => state.userReducer.user);
  const [inputSearch, setInputSearch] = useState("");
  return (
    <div>
      <Filter inputSearch={inputSearch} setInputSearch={setInputSearch} />

      {isAuth && user.isAdmin ? (
        <Button variant="outline-primary" onClick={() => navigate("/add")}>
          {" "}
          Ajouter un endroit
        </Button>
      ) : null}
      <div className="list">
        {load ? (
          <Loaading />
        ) : (
          end
            ?.filter(
              (end) =>
                end.nom
                  .toLowerCase()
                  .includes(inputSearch.toLowerCase().trim()) ||
                end.nom_plage
                  .toLowerCase()
                  .includes(inputSearch.toLowerCase().trim()) ||
                end.type_lot
                  .toLowerCase()
                  .includes(inputSearch.toLowerCase().trim()) 
            )

            .map((el) => <EndroitsCard endroit={el} key={el._id} />)
        )}
      </div>
    </div>
  );
};

export default EndroitsList;
