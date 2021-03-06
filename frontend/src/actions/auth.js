import axios from "axios";
import { returnErrors, createMessages } from "./messages";
import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  USER_IMAGE,
  GET_ERRORS,
  REMOVE_ACCOUNTS
} from "./types";

//Login user
export const loginSuccess = data => dispatch => {
  dispatch({
    type: LOGIN_SUCCESS,
    payload: data
  });
};

//Load user images
export const loadUserImage = () => (dispatch, getState) => {
  const token = getState().reducerAuth.token;
  axios
    .get(
      `https://graph.facebook.com/v7.0/me?fields=picture.width(400).height(400)&access_token=${token}`
    )
    .then(res => {
      dispatch(createMessages({ newAccounts: "Your Account has been loaded" }));
      dispatch({
        type: USER_IMAGE,
        payload: res,
        image_url: res.data.picture.data.url
      });
      console.log(res);
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: GET_ERRORS
      });
    });
};

//Logout User
export const logoutUser = () => dispatch => {
  dispatch({
    type: LOGOUT_SUCCESS
  });
  dispatch({
    type: REMOVE_ACCOUNTS
  });
};
