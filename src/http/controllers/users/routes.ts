import { FastifyInstance } from "fastify";
import { authenticate } from "@/http/controllers/users/authenticate.controller";
import { register } from "./register.controller";
import { profile } from "@/http/controllers/users/profile.controller";
import { verifyJWT } from "../../middlewares/verify-jwt";
import { refresh } from "./refresh";

export async function usersRoutes(app: FastifyInstance) {
  app.post("/users", register);
  app.post("/sessions", authenticate);

  app.patch("/token/refresh", refresh);

  /** Authenticated */
  app.get(
    "/me",
    {
      onRequest: [verifyJWT],
    },
    profile
  );
}
