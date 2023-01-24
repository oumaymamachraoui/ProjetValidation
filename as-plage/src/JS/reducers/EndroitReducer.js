import {
  FAIL_ENDROIT,
  LOAD_ENDROIT,
  SUCCESS_ENDROIT,
  UPDATE,
} from "../actionTypes/ActionTypes";

const initialState = {
  allEndroits: [],
  load: false,
  errors: [],
};

export const EndroitReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SUCCESS_ENDROIT:
      return { ...state, load: false, allEndroits: payload };

    case FAIL_ENDROIT:
      return { ...state, load: false, errors: payload };

    case LOAD_ENDROIT:
      return { ...state, load: true };

    case UPDATE:
      return {
        ...state,
        allEndroits: state.allEndroits.map((el) =>
          el.id === payload.id ? payload : el
        ),
      };

    default:
      return state;
  }
};
