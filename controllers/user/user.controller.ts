import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import env from "../../util/env";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export class UserController {
  constructor() {}

  /**
   * Show Login page /get method
   * @param req
   * @param res
   */
  async showLoginPage(req: Request, res: Response) {
    res.render("auth/login", {
      message: null,
    });
  }
  /**
   * Process login /post method
   * @param req
   * @param res
   */
  async login(req: Request, res: Response) {
    try {
      const email = req.body.email;
      const password = req.body.password;

      const user = await prisma.user.findFirst({
        where: {
          email: String(email),
        },
      });

      if (user) {
        const isValidPassword = await bcrypt.compare(password, user.password);

        if (isValidPassword) {
          // prepare the user object to generate token
          const userObject = {
            userid: user.id,
            username: user.name,
            email: user.email,
          };

          // generate token
          const token = jwt.sign(userObject, env("JWT_SECRET"), {
            expiresIn: env("JWT_EXPIRY"),
          });

          // set cookie
          res.cookie(env("COOKIE_NAME"), token, {
            maxAge: env("JWT_EXPIRY"),
            httpOnly: true,
            signed: true,
          });

          // set logged in user local identifier
          res.locals.loggedInUser = userObject;
          // typeof foo == 'undefined'
          res.redirect("/");
        } else {
          res.render("auth/login", {
            message: "Invalid password",
          });
        }
      } else {
        res.render("auth/login", {
          message: "Email not found.",
        });
      }
    } catch (error) {
      res.render("auth/login", {
        message: error,
      });
    }
  }

  /**
   * Show Register page /get method
   * @param req
   * @param res
   */
  async showRegisterPage(req: Request, res: Response) {
    res.render("auth/register", {
      message: null,
    });
  }
  /**
   * Process register /post method
   * @param req
   * @param res
   */
  async register(req: Request, res: Response) {
    try {
      const name = req.body.name;
      const email = req.body.email;
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const user = {
        name: name,
        email: email,
        password: hashedPassword,
      };

      const result = await prisma.user.create({
        data: user,
      });

      res.render("auth/login", {
        message: "Account created successfully. Please login.",
      });
    } catch (error) {
      res.render("auth/register", {
        message: error,
      });
    }
  }

  // do logout
  logout(req: Request, res: Response) {
    res.clearCookie(env("COOKIE_NAME"));
    res.render("auth/login", {
      message: "Logged out successfully",
    });
  }

  // show profile page
  showProfilePage(req: Request, res: Response) {
    res.render("profile/index");
  }
}
