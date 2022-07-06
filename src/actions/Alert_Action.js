import { ALERTCONSTANT } from "../constants/alert.constant";

export const Alert_Action = {
  success,
  error,
  clear,
};

function success(message) {
  return {
    type: ALERTCONSTANT.SUCCESS,
    message,
  };
}

function error(message) {
  return {
    type: ALERTCONSTANT.ERROR,
    message,
  };
}

function clear(message) {
  return {
    type: ALERTCONSTANT.CLEAR,
    message,
  };
}
