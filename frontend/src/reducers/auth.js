import { GET_USERS, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  isLoading: false,
  user_details: null,
  user_image: null,
  user_token: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        isAuthenticated: true,
        user_details: null,
        user_image: null,
        user_token: null
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.user_token.accessToken);
      return {
        ...state,
        isAuthenticated: true,
        user_details: action.user_details,
        user_image: action.user_image,
        user_token: action.user_token
      };
    case LOGOUT_SUCCESS:
      localStorage.removeItem("token");
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        user_details: null,
        user_image: null,
        user_token: null,
        isLoading: false
      };
    default:
      return state;
  }
}
