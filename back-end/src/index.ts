import "reflect-metadata";
import Server from "./shared/http/server";
import dotenv from "dotenv";
import Container from "typedi";
import { registerDependencies } from "@shared/di/di.register";

dotenv.config();

registerDependencies();

Container.get(Server);
