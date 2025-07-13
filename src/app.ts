import fastify from "fastify";
import fastifyMultipart from '@fastify/multipart';
import { routes } from "./routes";

const app = fastify({ logger: true });

app.register(fastifyMultipart);
app.register(routes);

export default app;
