import { Request, Response } from "express";
import { injectable } from "inversify";
import { CreateSessionUseCase } from "./use-cases/create-session.usecase";
import {
  controller,
  httpGet,
  httpPost,
  interfaces,
  request,
  response,
} from "inversify-express-utils";
import { UserRepository } from "@modules/users/user.repository";
import routeParamsMiddleware from "@shared/middlewares/route-params.middleware";
import { loginSchemaDto } from "./dto/login-schema.dto";

@controller("/session")
export class SessionController implements interfaces.Controller {
  constructor(
    private readonly createSessionUseCase: CreateSessionUseCase,
    private readonly userRepository: UserRepository
  ) {}

  @httpPost("/login", routeParamsMiddleware(loginSchemaDto))
  async create(request: Request, response: Response) {
    const user = await this.createSessionUseCase.execute({
      nickname: request.body.nickname,
      ipAddress: request.ip,
    });
    response.json({
      statusCode: 200,
      message: {
        user,
      },
    });
  }

  @httpGet("/")
  async listUsers(@response() response: Response) {
    const users = await this.userRepository.listAll();
    response.status(200).json(users);
  }
}
