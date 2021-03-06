import config from "config";
import AuthHeader from "./helper/AuthHeader";

export const userService = {
  login,
  logout,
  getAllUser,
};

function login(email, password) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  };

  return fetch(`${config.apiUrl}/users/authenticate`, requestOptions)
    .then(handleResponse)
    .then((user) => {
      localStorage.setItem("user", JSON.stringify(user));
      return user;
    });
}

function logout() {
  localStorage.removeItem("user");
}

function getAllUser() {
  const requestOptions = {
    method: "GET",
    headers: AuthHeader(),
  };

  return fetch(`${config.url}/users`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        logout();
        location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
}
