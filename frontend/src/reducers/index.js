import { combineReducers } from "redux";
import auth from "./auth";
import messages from "./messages";
import errors from "./errors";
import pages from "./pages";

export default combineReducers({
  reducerAuth: auth,
  reducerMessages: messages,
  reducerErrors: errors,
  reducerPages: pages
});
