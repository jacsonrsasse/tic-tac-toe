import { Router } from "express";
import loginRoutes from "@modules/login/login.route";

const routes = Router();

routes.use("/login", loginRoutes);

export default routes;
