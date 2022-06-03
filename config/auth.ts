import { env } from "../system/util";

export const authConfig = {
  guards: {
    jwt: {
      secret: env("JWT_SECRET"),
      expires: env("JWT_EXPIRY"),
    },
  },
};
