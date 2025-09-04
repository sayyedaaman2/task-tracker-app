import dotenv from "dotenv";
dotenv.config();

interface IServerConfig {
  app: {
    port: number;
    env: "development" | "production" | "test";
  };
}

const serverConfig: IServerConfig = {
  app: {
    port: process.env.PORT ? Number(process.env.PORT) : 8000,
    env: (process.env.NODE_ENV as IServerConfig["app"]["env"]) || "development",
  }
};

export default serverConfig;
