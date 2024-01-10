import { Router } from "express";
import sessionRoutes from "@modules/session/session.route";

const routes = Router();

routes.use("/session/login", sessionRoutes);

export default routes;
