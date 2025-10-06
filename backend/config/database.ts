export default ({ env }) => {
  const client = env('DATABASE_CLIENT', 'sqlite');

  const connections = {
    sqlite: {
      connection: {
        filename: env('DATABASE_FILENAME', '.tmp/data.db'),
      },
      useNullAsDefault: true,
    },
    postgres: {
      connection: {
        host: env('DATABASE_HOST', ''),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', ''),
        user: env('DATABASE_USERNAME', ''),
        password: env('DATABASE_PASSWORD', ''),
        schema: env('DATABASE_SCHEMA', 'public'),
        ssl: env.bool('DATABASE_SSL', false)
          ? {
              rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false),
            }
          : false,
      },
      debug: false,
    },
  };

  return {
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
    },
  };
};