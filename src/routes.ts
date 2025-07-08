import { FastifyInstance } from "fastify";
import { CreateUserController } from "./controller/CreateUserController";
import { LoginUserController } from "./controller/LoginUserController";

export function routes(fastify: FastifyInstance) {
  fastify.post("/create-acount", async (request, reply) => {
    return new CreateUserController().handle(request, reply);
  });

  fastify.post("/login", async (request, reply) => {
    return new LoginUserController().handle(request, reply);
  });
}
