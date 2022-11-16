// Auth option
export type AuthOption = {
  cookieName?: string;
  jwt: {
    secret?: string;
    refreshSecret?: string;
    expires?: string;
  };
};
