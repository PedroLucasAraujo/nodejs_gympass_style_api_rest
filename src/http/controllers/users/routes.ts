import { FastifyInstance } from "fastify";
import { authenticate } from "@/http/controllers/users/authenticate.controller";
import { register } from "./register.controller";
import { profile } from "@/http/controllers/users/profile.controller";
import { verifyJWT } from "../../middlewares/verify-jwt";

export async function usersRoutes(app: FastifyInstance) {
  app.post("/users", register);
  app.post("/sessions", authenticate);

  /** Authenticated */
  app.get(
    "/me",
    {
      onRequest: [verifyJWT],
    },
    profile
  );
}
