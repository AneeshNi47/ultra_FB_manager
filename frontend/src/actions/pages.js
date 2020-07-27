import axios from "axios";
import { returnErrors } from "./messages";
import { USER_ACCOUNTS, GET_ERRORS } from "./types";

//Load user images
export const loadUserAccounts = () => (dispatch, getState) => {
  const token = getState().reducerAuth.token;
  axios
    .get(
      `https://graph.facebook.com/v7.0/me/?fields=accounts{about,description,name,picture.width(400).height(400),emails,category_list,website,phone,single_line_address}&access_token=${token}`
    )
    .then(res => {
      dispatch({
        type: USER_ACCOUNTS,
        payload: res.data.accounts.data
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: GET_ERRORS
      });
    });
};
