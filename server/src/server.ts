import app from "./app"; // use .js if type:module enabled
import { serverConfig, connectDB } from "./config";

const startServer = async () => {
  try {
    await connectDB();

    app.listen(serverConfig.app.port, () => {
      console.log(
        `🚀 Server is running on port: ${serverConfig.app.port} and environment: ${serverConfig.app.env}`
      );
    });
  } catch (error) {
    console.error("❌ Unable to connect to the database:", error);
    process.exit(1);
  }
};

startServer();
