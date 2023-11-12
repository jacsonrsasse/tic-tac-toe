import "reflect-metadata";
import Server from "./shared/http/server";
import dotenv from "dotenv";

dotenv.config();

new Server();
