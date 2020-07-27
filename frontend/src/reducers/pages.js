import {
  USER_ACCOUNTS,
  REMOVE_ACCOUNTS,
  UPDATE_STATUS
} from "../actions/types";

const initialState = {
  user_accounts: [],
  status: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_ACCOUNTS:
      return {
        ...state,
        user_accounts: action.payload
      };
    case REMOVE_ACCOUNTS:
      return {
        user_account: []
      };
    case UPDATE_STATUS:
      return {
        status: action.payload
      };
    default:
      return state;
  }
}
