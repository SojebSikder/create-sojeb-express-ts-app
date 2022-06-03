import jwt from "jsonwebtoken";
import { env } from "../../system/util";

/**
 * Authenticate using jwt token
 */
export class Authenticate {
  constructor() {}

  /**
   * authenticate using jwt token
   * @param req
   * @param res
   * @param next
   * @returns
   */
  static authenticateToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (token == null) return res.sendStatus(401);

    jwt.verify(token, env("JWT_SECRET"), (err, user) => {
      console.log(err);
      if (err) return res.sendStatus(403);
      req.user = user;
      next();
    });
  }

  /**
   * Generate jwt access token
   * @param user
   * @returns
   */
  static generateAccessToken(user) {
    // generate token
    const token = jwt.sign(user, env("JWT_SECRET"), {
      expiresIn: env("JWT_EXPIRY"),
    });

    return token;
  }
}
