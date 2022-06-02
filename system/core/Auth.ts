import jwt from "jsonwebtoken";
import env from "../../util/env";

export class Auth {
  /**
   * Get data from jwt token
   * @param req
   * @param res
   * @returns
   */
  static get(req, res) {
    let cookies =
      Object.keys(req.signedCookies).length > 0 ? req.signedCookies : null;

    if (cookies) {
      try {
        const token = cookies[env("COOKIE_NAME")];
        const decoded = jwt.verify(token, env("JWT_SECRET"));

        return decoded;
      } catch (err) {
        return err;
      }
    } else {
      return null;
    }
  }
}
