import { ALERTCONSTANT } from "../constants/alert.constant";

export function alert(state = {}, action) {
  switch (action.type) {
    case ALERTCONSTANT.SUCCESS:
      return {
        type: "alert-success",
        message: action.message,
      };
    case ALERTCONSTANT.ERROR:
      return {
        type: "alert-danger",
        message: action.message,
      };
    case ALERTCONSTANT.CLEAR:
      return {};
    default:
      return state;
  }
}
