import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { CreateUserController } from "./controller/Auth/CreateUserController";
import { LoginUserController } from "./controller/Auth/LoginUserController";

import { GetUserController } from "./controller/Auth/GetUserController";
import { authenticateToken } from "./middleware/authenticateToke";
import { AddMomentsController } from "./controller/Moments/AddMomentsController";
import { GetAllMomentsController } from "./controller/Moments/GetAllMomentsController";

export function routes(fastify: FastifyInstance) {
  fastify.post(
    "/create-acount",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new CreateUserController().handle(request, reply);
    }
  );

  fastify.post(
    "/login",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new LoginUserController().handle(request, reply);
    }
  );

  // AUTH: BUSCA DE USUÁRIO
  fastify.get(
    "/get-user",
    { preHandler: authenticateToken },
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new GetUserController().handle(request, reply);
    }
  );

  // MOMENT: ADICIONAR UM NOVO MOMENTO
  fastify.post(
    "/add-registered-moment",
    { preHandler: authenticateToken },
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new AddMomentsController().handle(request, reply);
    }
  );

  // MOMENT: BUSCAR TODO OS MOMENTO POR USUÁRIO
  fastify.get(
    "/get-all-moments",
    { preHandler: authenticateToken },
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new GetAllMomentsController().handle(request, reply);
    }
  );
}
