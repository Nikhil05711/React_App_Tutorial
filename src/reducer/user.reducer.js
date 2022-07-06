import { USERCONSTANT } from "../constants/user.constant";

export function users(state = {}, action) {
  switch (action.type) {
    case USERCONSTANT.GETALL_REQUEST:
      return {
        loading: true,
      };
    case USERCONSTANT.GETALL_SUCCESS:
      return {
        items: action.users,
      };
    case USERCONSTANT.GETALL_FAILURE:
      return {
        error: action.error,
      };
    default:
      return state;
  }
}
