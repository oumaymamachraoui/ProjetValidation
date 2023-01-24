import axios from "axios";
import {
  FAIL_USER,
  LOAD_USER,
  SUCCESS_USER,
  UPDATE,
} from "../actionTypes/ActionTypes";

export const getUsers = () => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    let result = await axios.get("/api/user/get-all");
    dispatch({ type: SUCCESS_USER, payload: result.data });
  } catch (error) {
    dispatch({ tyep: FAIL_USER, payload: error });
  }
};

export const updateAdmin = (id) => async (dispatch) => {
  try {
    await axios.put(`/api/user/updateAdmin/${id}`);
    dispatch(getUsers());
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error });
  }
};
export const editUser = (id, newUser) => async (dispatch) => {
  try {
    await axios.put(`/api/user/edit/${id}`, newUser);
    dispatch({ type: UPDATE, payload: { id, newUser } });
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error });
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/user/delete/${id}`);
    dispatch(getUsers());
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error });
  }
};