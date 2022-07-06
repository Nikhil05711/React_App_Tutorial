import { USERCONSTANT } from "../constants/user.constant";

let user = JSON.parse(localStorage.getItem("user"));
const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case USERCONSTANT.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user,
      };
    case USERCONSTANT.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user,
      };
    case USERCONSTANT.LOGIN_FAILURE:
      return {};
    case USERCONSTANT.LOGOUT:
      return {};
    default:
      return state;
  }
}
