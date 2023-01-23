import Fastify from "fastify";
import cors from "@fastify/cors";

import { appRoutes } from "./routes";

const app = Fastify();

app.register(cors);
app.register(appRoutes);

app.listen({ port: 3333, host: "10.0.0.112" }, () => {
  console.log("HTTP server is running 🚀");
});
