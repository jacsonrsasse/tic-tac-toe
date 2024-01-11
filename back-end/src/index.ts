import "reflect-metadata";
import dotenv from "dotenv";
import Server from "./shared/http/server";

dotenv.config();

new Server();
