import fastify from "fastify";
import fastifyMultipart from "@fastify/multipart";
import fastifyCors from "@fastify/cors";
import { routes } from "./routes";
import fastifyStatic from "@fastify/static";
import path from "path";
const app = fastify({ logger: true });

app.register(fastifyMultipart);
app.register(routes);
app.register(fastifyCors, {
  methods: ["PUT", "DELETE"],
});
app.register(fastifyStatic, {
  root: path.join(__dirname, "..", "uploads"),
  prefix: "/uploads",
});

export default app;
