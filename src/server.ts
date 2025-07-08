import fastify, { FastifyReply, FastifyRequest } from "fastify";
import { routes } from "./routes";
const app = fastify({ logger: true });

app.register(routes);

const start = async () => {
  app.get("/backend", async (request: FastifyRequest, reply: FastifyReply) => {
    reply.status(200).send({ message: "Olá backend rodando" });
  });

  // Login de Usuário
  //   app.post("/login", async (request: FastifyRequest, reply: FastifyReply) => {
  //     const { email, password } = request.body as {
  //       email: string;
  //       password: string;
  //     };

  //     if (!email || !password) {
  //       reply.status(400).send({ message: "Todos os campos são requiridos" });
  //     }

  //     const user = await prismaClient.user.findFirst({
  //       where: {
  //         email: email,
  //       },
  //     });

  //     if (!user) {
  //       return reply
  //         .status(400)
  //         .send({ error: true, message: "Usuário não encontrado!" });
  //     }

  //     const isPasswordValid = await bcrypt.compare(password, user.password);

  //     if (!isPasswordValid) {
  //       return reply.status(400).send({ message: "Credenciais invalidas!" });
  //     }

  //     const accessToken = jwt.sign(
  //       { userId: user.id },
  //       process.env.ACCESS_TOKEN_SECRET!,
  //       {
  //         expiresIn: "72h",
  //       }
  //     );

  //     return {
  //       error: false,
  //       message: "Login bem Sucedido!",
  //       user: {
  //         fullName: user.fullName,
  //         email: user.email,
  //       },
  //       accessToken,
  //     };
  //   });
  app.listen({ port: 8000 }, () => {
    console.log("Rodando na porta 8000");
  });
};

start();
