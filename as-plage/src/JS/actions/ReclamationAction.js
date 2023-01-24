import axios from "axios";
import {
  FAIL_RECLAMATION,
  LOAD_RECLAMATION,
  SUCCESS_RECLAMATION,
  UPDATE,
} from "../actionTypes/ActionTypes";

//get all reclamation

export const getReclamations = () => async (dispatch) => {
  dispatch({ type: LOAD_RECLAMATION });
  try {
    let result = await axios.get("/api/reclamation/get-all");
    dispatch({ type: SUCCESS_RECLAMATION, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_RECLAMATION, payload: error });
  }
};

// add reclamation

export const addReclamation = (newReclamation, id) => async (dispatch) => {
  dispatch({ type: LOAD_RECLAMATION });
  try {
    await axios.post(`/api/reclamation/add/${id}`, newReclamation);
    dispatch({ type: SUCCESS_RECLAMATION, payload: newReclamation });
  } catch (error) {
    dispatch({ tyep: FAIL_RECLAMATION, payload: error.response });
  }
};

export const editReclam = (id) => async (dispatch) => {
  try {
    await axios.put(`/api/reclamation/edit/${id}`);
    dispatch(getReclamations());
  } catch (error) {
    dispatch({ type: FAIL_RECLAMATION, payload: error.response });
  }
};

export const deleteReclam = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/reclamation/delete/${id}`);
    dispatch(getReclamations());
  } catch (error) {
    dispatch({ type: FAIL_RECLAMATION, payload: error.response });
  }
};