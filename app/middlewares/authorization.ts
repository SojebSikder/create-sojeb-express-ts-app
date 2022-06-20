import { Auth } from "../../system";

/**
 * simple middleware for authorization
 */
export function authorization() {
  return Auth.authToken(function (error, data, req, res) {
    res.send("your are not allowed to access this page");
  });
}
