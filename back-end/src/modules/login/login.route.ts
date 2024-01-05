import { Router } from "express";
import Container from "typedi";
import { LoginController } from "./login.controller";
import isConnectableMiddleware from "@shared/middlewares/is-connectable.middleware";
import routeParamsMiddleware from "@shared/middlewares/route-params.middleware";
import { loginSchemaDto } from "./dto/login-schema.dto";

const loginRoutes = Router();
const controller = Container.get(LoginController);

loginRoutes.use(isConnectableMiddleware);

loginRoutes.post("/", routeParamsMiddleware(loginSchemaDto), controller.login);

export default loginRoutes;
