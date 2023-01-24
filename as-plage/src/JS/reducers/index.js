import { combineReducers } from "redux";
import { EndroitReducer } from "./EndroitReducer";
import docs from "./DocumentReducer";
import { ReclamationReducer } from "./ReclamationReducer";
import { userReducer } from "./userReducer";
import { userListReducer } from "./UserListReducer";
const rootReducer = combineReducers({
  EndroitReducer,
  docs,
  userReducer,
  ReclamationReducer,
  userListReducer
});
export default rootReducer;
