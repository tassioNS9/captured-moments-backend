import fastify from "fastify";
import fastifyMultipart from "@fastify/multipart";
import fastifyCors from "@fastify/cors";
import { routes } from "./routes";

const app = fastify({ logger: true });

app.register(fastifyMultipart);
app.register(routes);
app.register(fastifyCors);

export default app;
