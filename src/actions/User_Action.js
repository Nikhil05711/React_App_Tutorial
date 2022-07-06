import { USERCONSTANT } from "../constants/user.constant";
import { userService } from "../Services/userService";
import { History } from "../helper/History";
import { Alert_Action } from "./Alert_Action";

export const userAcions = {
  login,
  logout,
  getAllUsers,
};

function login(email, password) {
  return (dispatch) => {
    dispatch(request({ email }));

    userService.login(email, password).then(
      (user) => {
        dispatch(success(user));
        History.push("/");
      },
      (error) => {
        dispatch(failure(error));
        dispatch(Alert_Action.error(error));
      }
    );
  };

  function request(user) {
    return { type: USERCONSTANT.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: USERCONSTANT.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: USERCONSTANT.LOGIN_FAILURE, error };
  }
}

function logout() {
  userService.logout();
  return { type: USERCONSTANT.LOGOUT };
}

function getAllUsers() {
  return (dispatch) => {
    dispatch(request());

    userService.getAllUsers().then(
      (users) => dispatch(success(users)),
      (error) => dispatch(failure(error))
    );
  };

  function request() {
    return { type: USERCONSTANT.GETALL_REQUEST };
  }
  function success(users) {
    return { type: USERCONSTANT.GETALL_SUCCESS, users };
  }
  function failure(error) {
    return { type: USERCONSTANT.GETALL_FAILURE, error };
  }
}

export default User_Action;
