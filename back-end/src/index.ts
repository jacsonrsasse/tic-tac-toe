import "reflect-metadata";
import Server from "./shared/http/server";
import dotenv from "dotenv";
import Container from "typedi";

dotenv.config();

Container.get(Server);
