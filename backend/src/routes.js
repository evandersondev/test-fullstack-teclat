import { Router } from "express";
const routes = Router();

import UserController from "./controllers/UserController";
import SessionController from "./controllers/SessionController";
import authMiddleware from "./middlewares/auth";

routes.post("/users", UserController.store);
routes.post("/sessions", SessionController.authenticate);

routes.use(authMiddleware);

routes.get("/users", UserController.index);
routes.get("/users/:id", UserController.show);
routes.put("/users/:id", UserController.update);
routes.delete("/users/:id", UserController.destroy);

export default routes;
