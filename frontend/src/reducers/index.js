import { combineReducers } from "redux";
import auth from "./auth";
import messages from "./messages";
import errors from "./errors";

export default combineReducers({
  reducerAuth: auth,
  reducerMessages: messages,
  reducerErrors: errors
});
