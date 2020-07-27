import axios from "axios";
import { returnErrors } from "./messages";
import {
  USER_ACCOUNTS,
  GET_ERRORS,
  REMOVE_ACCOUNTS,
  UPDATE_STATUS
} from "./types";

//Load accounts/pages images
export const loadUserAccounts = () => (dispatch, getState) => {
  const token = getState().reducerAuth.token;
  axios
    .get(
      `https://graph.facebook.com/v7.0/me/?fields=accounts{about,description,name,picture.width(400).height(400),emails,category_list,website,phone,single_line_address,access_token}&access_token=${token}`
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

//Update About images
export const updateAbout = (access_token, about, pageID) => dispatch => {
  axios
    .post(
      `https://graph.facebook.com/v7.0/${pageID}?about=${about}&access_token=${access_token}`
    )
    .then(res => {
      dispatch({
        type: UPDATE_STATUS,
        payload: res.success
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: GET_ERRORS
      });
    });
};

export const updatePhone = (access_token, phone, pageID) => dispatch => {
  axios
    .post(
      `https://graph.facebook.com/v7.0/${pageID}?phone=${phone}&access_token=${access_token}`
    )
    .then(res => {
      dispatch({
        type: UPDATE_STATUS,
        payload: res.success
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: GET_ERRORS
      });
    });
};

export const updateWebsite = (access_token, website, pageID) => dispatch => {
  axios
    .post(
      `https://graph.facebook.com/v7.0/${pageID}?website=${website}&access_token=${access_token}`
    )
    .then(res => {
      dispatch({
        type: UPDATE_STATUS,
        payload: res.success
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: GET_ERRORS
      });
    });
};
export const removeUserAccounts = data => dispatch => {
  dispatch({
    type: REMOVE_ACCOUNTS,
    payload: data
  });
};
