export function configureFakeBackend() {
  let users = [
    {
      id: 1,
      email: "Nikhil05711@gmail.com",
      password: "Nikhil@4",
      firstName: "Nikhil",
      lastName: "Chauhan",
    },
  ];

  let realFetch = window.fetch;
  window.fetch = function (url, opts) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url.endsWith("/users/authenticate") && opts.method === "POST") {
          let params = JSON.parse(opts.body);

          let filteredUsers = users.filter((user) => {
            return (
              user.email === params.email && user.password === params.password
            );
          });

          if (filteredUsers.length) {
            let user = filteredUsers[0];
            let responseJson = {
              id: user.id,
              email: user.email,
              password: user.password,
              firstName: user.firstName,
              lastName: user.lastName,
              token: "my_first_token",
            };
            resolve({
              ok: true,
              text: () => Promise.resolve(JSON.stringify(responseJson)),
            });
          } else {
            reject("Username or password is incorrect");
          }
          return;
        }

        if (url.endsWith("/users") && opts.method === "GET") {
          if (
            opts.headers &&
            opts.headers.Authorization === "Bearer fake-jwt-token"
          ) {
            resolve({
              ok: true,
              text: () => Promise.resolve(JSON.stringify(users)),
            });
          } else {
            // return 401 not authorised if token is null or invalid
            reject("Unauthorised");
          }

          return;
        }

        // pass through any requests not handled above
        realFetch(url, opts).then((response) => resolve(response));
      }, 500);
    });
  };
}
