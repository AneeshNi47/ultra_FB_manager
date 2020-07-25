import { LOGIN_SUCCESS, LOGOUT_SUCCESS, USER_IMAGE } from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  user_details: null,
  user_image: null,
  user_imageUrl: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.tokenDetail.accessToken);
      return {
        ...state,
        ...action.payload,
        token: action.payload.tokenDetail.accessToken,
        isAuthenticated: true,
        user_details: action.payload.profile
      };
    case USER_IMAGE:
      return {
        ...state,
        user_image: action.payload,
        user_imageUrl: action.image_url
      };
    case LOGOUT_SUCCESS:
      localStorage.removeItem("token");
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        user_details: null,
        user_image: null,
        user_imageUrl: null
      };
    default:
      return state;
  }
}
