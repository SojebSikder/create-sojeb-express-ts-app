export type Option = {
    /**
     * set database driver
     */
    driver?: string;
    connection: {
      host?: string;
      user?: string;
      password?: string;
      dbname?: string;
      databaseUrl?: string;
    };
  };