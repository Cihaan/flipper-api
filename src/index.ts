import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { DbConnect } from "./db";

import { myEnv } from "../conf";
import flippers from "./routes/flippers";
import makes from "./routes/makes";

const app = new Hono();
await DbConnect();

const PORT = myEnv.SERVER_PORT;
console.log(`Server is running on port ${PORT}`);

// 3000/api/flippers/
app.route("/api", flippers);
// 3000/api/flippers/
app.route("/api", makes);

app.use("*", (c) => {
  return c.json({ msg: "404 oups" });
});

serve({
  fetch: app.fetch,
  port: parseInt(PORT),
});
