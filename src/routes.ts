import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { CreateUserController } from "./controller/Auth/CreateUserController";
import { LoginUserController } from "./controller/Auth/LoginUserController";
import { upload } from "./config/multer";
import { GetUserController } from "./controller/Auth/GetUserController";
import { authenticateToken } from "./middleware/authenticateToke";
import { AddMomentsController } from "./controller/Moments/AddMomentsController";
import { GetAllMomentsController } from "./controller/Moments/GetAllMomentsController";
import { SearchMomentsController } from "./controller/Moments/SearchMomentsController";
import { UpdateMomentsController } from "./controller/Moments/UpdateMomentsController";
import { UploadFileController } from "./controller/Upload/UploadFileController";
import { DeleteFileController } from "./controller/Upload/DeleteFileController";
import { DeleteMomentsController } from "./controller/Moments/DeleteMomentsController";
import { UpdateIsFavoriteMomentsController } from "./controller/Moments/UpdateIsFavoriteController";
import { DateFilterMomentsController } from "./controller/Moments/DateFilterMomentsController";
import { GenerateIAController } from "./controller/IA/GenerateIAController";

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

  // MOMENT: BUSCAR POR TERMOS
  fastify.get(
    "/search",
    { preHandler: authenticateToken },
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new SearchMomentsController().handle(request, reply);
    }
  );

  // MOMENT: BUSCAR POR TERMOS
  fastify.put(
    "/edit-moments/:id",
    { preHandler: authenticateToken },
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new UpdateMomentsController().handle(request, reply);
    }
  );

  // MOMENT: DELETAR MOMENTO
  fastify.delete(
    "/delete-moment/:id",
    { preHandler: authenticateToken },
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new DeleteMomentsController().handle(request, reply);
    }
  );

  // UPLOAD: ADICIONAR IMAGEM
  fastify.post(
    "/image-upload",
    { preHandler: upload.single("image") },
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new UploadFileController().handle(request, reply);
    }
  );

  // UPLOAD: DELETAR IMAGEM
  fastify.delete(
    "/delete-upload",
    { preHandler: upload.single("image") },
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new DeleteFileController().handle(request, reply);
    }
  );

  // MOMENT: ATUALIZAR OS FAVORITOS DO MOMENTO
  fastify.put(
    "/update-is-favorite/:id",
    { preHandler: authenticateToken },
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new UpdateIsFavoriteMomentsController().handle(request, reply);
    }
  );

  // MOMENT: FILTRO DE MOMENTOS
  fastify.get(
    "/registered-moment/filter",
    { preHandler: authenticateToken },
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new DateFilterMomentsController().handle(request, reply);
    }
  );

  // IA: INTEGRAÇÃO COM IA
  fastify.post("/ia", async (request: FastifyRequest, reply: FastifyReply) => {
    return new GenerateIAController().handle(request, reply);
  });
}
