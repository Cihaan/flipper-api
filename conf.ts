import * as dotenv from "dotenv";
dotenv.config();

interface Env {
  MONGODB_CLUSTER: string;
  MONGODB_DATABASE: string;
  SERVER_PORT: string;
}

export const myEnv: Env = {
  MONGODB_CLUSTER: process.env.MONGODB_CLUSTER || "",
  MONGODB_DATABASE: process.env.MONGODB_CLUSTER || "",
  SERVER_PORT: process.env.PORT || "3000",
};
