import axios from "axios";
import {
  FAIL_ENDROIT,
  LOAD_ENDROIT,
  SUCCESS_ENDROIT,
  UPDATE,
} from "../actionTypes/ActionTypes";

// get tous les endroits

export const getEndroit = () => async (dispatch) => {
  dispatch({ type: LOAD_ENDROIT });
  try {
    let result = await axios.get("/api/endroit/get-all");
    dispatch({ type: SUCCESS_ENDROIT, payload: result.data });
  } catch (error) {
    dispatch({ tyep: FAIL_ENDROIT, payload: error.response });
  }
};
// one endroit
export const getOneEndroit = (id) => async (dispatch) => {
  dispatch({ type: LOAD_ENDROIT });
  try {
    const result=await axios.get(`/api/endroit/get-one/${id}`);
    dispatch({ type: SUCCESS_ENDROIT, payload: result.data });
  } catch (error) {
    dispatch({ tyep: FAIL_ENDROIT, payload: error.response });
  }
};
// ajouter un endroit

export const addEndroit = (newEndroit) => async (dispatch) => {
  dispatch({ type: LOAD_ENDROIT });
  try {
    await axios.post("/api/endroit/add", newEndroit);
    dispatch(getEndroit());
  } catch (error) {
    dispatch({ tyep: FAIL_ENDROIT, payload: error.response });
  }
};

// supprimer un endroit

export const deleteEndroit = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/endroit/delete/${id}`);
    dispatch(getEndroit());
  } catch (error) {
    dispatch({ type: FAIL_ENDROIT, payload: error.response });
  }
};

//modifier un endroit

export const editEndroit = (id, newEndroit) => async (dispatch) => {
  try {
    await axios.patch(`/api/endroit/edit/${id}`, newEndroit);
    dispatch({ type: UPDATE, payload: { id, newEndroit } });
  } catch (error) {
    dispatch({ type: FAIL_ENDROIT, payload: error.response });
  }
};
