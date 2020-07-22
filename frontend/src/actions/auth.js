import axios from "axios";
import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./types";

//Login user
export const loginSuccess = data => dispatch => {
  dispatch({
    type: LOGIN_SUCCESS,
    user_details: data.profile,
    user_image: data.profile.picture,
    user_token: data.profile.tokenDetail.accessToken
  });
};

//Load user using token
export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });

  axios
    .get("/api/auth/user", tokenConfig(getState))
    .then(res => {
      dispatch({
        type: USER_LOADED,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR
      });
    });
};

//Logout User
export const logoutUser = () => dispatch => {
  dispatch({
    type: LOGOUT_SUCCESS
  });
};

//setup config with token--helper function
export const tokenConfig = getState => {
  const token = getState().reducerAuth.token;
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
    //console.log(config.headers);
  }
  return config;
};
