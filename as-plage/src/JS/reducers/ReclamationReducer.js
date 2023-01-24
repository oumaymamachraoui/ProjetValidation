import {
  ADD_RECLAMATION,
  FAIL_RECLAMATION,
  LOAD_RECLAMATION,
  SUCCESS_RECLAMATION,
  UPDATE,
} from "../actionTypes/ActionTypes";

const initialState = {
  reclamation: [],
  load: false,
  errors: [],
};

export const ReclamationReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SUCCESS_RECLAMATION:
      return { ...state, load: false, reclamation: payload };

    case FAIL_RECLAMATION:
      return { ...state, load: false, errors: payload };

    case LOAD_RECLAMATION:
      return { ...state, load: true };

    case ADD_RECLAMATION:
      return {
        ...state,
        reclamation: state.reclamation.map((el) =>
          el.id === payload.id ? payload : el
        ),
      };
    case UPDATE:
      return {
        ...state,
        reclamation: state.reclamation.map((el) =>
          el.id === payload.id ? payload : el
        ),
      };

    default:
      return state;
  }
};
