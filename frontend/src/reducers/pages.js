import { USER_ACCOUNTS } from "../actions/types";

const initialState = {
  user_accounts: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_ACCOUNTS:
      return {
        ...state,
        user_accounts: action.payload
      };
    default:
      return state;
  }
}
