import { Router } from "express";
import { LoginController } from "./login.controller";
import isConnectableMiddleware from "@shared/middlewares/is-connectable.middleware";
import routeParamsMiddleware from "@shared/middlewares/route-params.middleware";
import { loginSchemaDto } from "./dto/login-schema.dto";
import { getContainer } from "src/config/inversify";

const loginRoutes = Router();
const controller = getContainer().get(LoginController);

loginRoutes.use(isConnectableMiddleware);

loginRoutes.post("/", routeParamsMiddleware(loginSchemaDto), controller.login);

export default loginRoutes;
