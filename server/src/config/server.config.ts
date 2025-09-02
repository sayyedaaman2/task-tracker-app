import dotenv from "dotenv";
dotenv.config();

interface IServerConfig {
  app: {
    port: number;
    env: "development" | "production" | "test";
  };
  jwt: {
    secret: string;
    expiresIn: string;
  };
}

const serverConfig: IServerConfig = {
  app: {
    port: process.env.PORT ? Number(process.env.PORT) : 8000,
    env: (process.env.NODE_ENV as IServerConfig["app"]["env"]) || "development",
  },
  jwt: {
    secret: process.env.JWT_SECRET || "supersecretkey",
    expiresIn: process.env.JWT_EXPIRES_IN || "1d",
  },
};

export default serverConfig;
