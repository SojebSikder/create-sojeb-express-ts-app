import { Auth } from "bihongojs";

/**
 * simple middleware for authorization
 */
export function authorization() {
  return Auth.authToken(function (error, data, req, res) {
    if (error) {
      res.send("your are not allowed to access this page");
    }
  });
}
