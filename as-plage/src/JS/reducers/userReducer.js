import {
  CURRENT_USER,
  FAIL_USER,
  LOAD_USER,
  LOGIN_USER,
  LOGOUT,
  REGISTER_USER,
  UPDATE,
} from "../actionTypes/ActionTypes";

const initialState = {
  user: [],
  loadUser: false,
  error: null,
  isAuth: false,
};
export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_USER:
      return { ...state, loadUser: true };
    case REGISTER_USER:
      localStorage.setItem("token", payload.token);
      return { ...state, loadUser: false, user: payload.user, isAuth: true };
    case LOGIN_USER:
      localStorage.setItem("token", payload.token);
      return { ...state, loadUser: false, user: payload.user, isAuth: true };
    case LOGOUT:
      localStorage.removeItem("token");
      return { loadUser: false, isAuth: false, user: [] };
    case FAIL_USER:
      return { ...state, error: payload };
      case CURRENT_USER:
        return {...state, user: payload , loadUser: false, isAuth:true}

    default:
      return state;
  }
};
