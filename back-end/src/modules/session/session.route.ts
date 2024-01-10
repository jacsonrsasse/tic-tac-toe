import { Router } from "express";
import { SessionController } from "./session.controller";
import isConnectableMiddleware from "@shared/middlewares/is-connectable.middleware";
import routeParamsMiddleware from "@shared/middlewares/route-params.middleware";
import { loginSchemaDto } from "./dto/login-schema.dto";
import { getContainer } from "src/config/inversify";

const sessionRoutes = Router();
const controller = getContainer().get(SessionController);

sessionRoutes.use(isConnectableMiddleware);

sessionRoutes.post(
  "/",
  routeParamsMiddleware(loginSchemaDto),
  controller.create
);

export default sessionRoutes;
