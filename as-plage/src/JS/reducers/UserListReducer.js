import {
  FAIL_USER,
  LOAD_USER,
  SUCCESS_USER,
  UPDATE,
} from "../actionTypes/ActionTypes";

const initialState = {
  users: [],
  loadUser: false,
  error: null,
};
export const userListReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_USER:
      return { ...state, loadUser: true };
    case FAIL_USER:
      return { ...state, error: payload };
    case SUCCESS_USER:
      return { ...state, loadUser: false, users: payload };
    case UPDATE:
      return {
        ...state,
        user: state.users.map((el) => (el.id === payload.id ? payload : el)),
      };
    default:
      return state;
  }
};
